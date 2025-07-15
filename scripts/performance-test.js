#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class PerformanceTester {
  constructor() {
    this.results = [];
    this.browser = null;
    this.page = null;
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // Enable performance monitoring
    await this.page.setCacheEnabled(false);
    await this.page.setViewport({ width: 1920, height: 1080 });
  }

  async measurePageLoad(url, testName) {
    console.log(`Testing: ${testName}`);
    
    const startTime = Date.now();
    
    // Navigate to page
    await this.page.goto(url, { waitUntil: 'networkidle0' });
    
    // Wait for content to load
    await this.page.waitForSelector('.grid', { timeout: 10000 });
    
    const loadTime = Date.now() - startTime;
    
    // Get performance metrics
    const metrics = await this.page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
        domSize: document.querySelectorAll('*').length,
        memoryUsage: performance.memory ? {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
        } : null
      };
    });
    
    // Test filtering performance
    const filterStartTime = Date.now();
    await this.page.click('button:contains("All Brands")');
    await this.page.waitForTimeout(100);
    const filterTime = Date.now() - filterStartTime;
    
    const result = {
      testName,
      url,
      loadTime,
      filterTime,
      ...metrics
    };
    
    this.results.push(result);
    console.log(`✓ ${testName}: ${loadTime}ms load, ${filterTime}ms filter`);
    
    return result;
  }

  async testDatabaseQueries() {
    console.log('\nTesting database query performance...');
    
    // Monitor network requests to Supabase
    const requests = [];
    this.page.on('request', request => {
      if (request.url().includes('supabase.co')) {
        requests.push({
          url: request.url(),
          method: request.method(),
          timestamp: Date.now()
        });
      }
    });
    
    await this.page.goto('http://localhost:8084/products', { waitUntil: 'networkidle0' });
    
    console.log(`Database requests made: ${requests.length}`);
    requests.forEach((req, index) => {
      console.log(`  ${index + 1}. ${req.method} ${req.url.split('?')[0]}`);
    });
    
    return requests.length;
  }

  async testMemoryUsage() {
    console.log('\nTesting memory usage...');
    
    const memoryBefore = await this.page.evaluate(() => {
      return performance.memory ? {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
      } : null;
    });
    
    // Perform multiple filter operations
    for (let i = 0; i < 10; i++) {
      await this.page.click('button:contains("All Brands")');
      await this.page.waitForTimeout(50);
    }
    
    const memoryAfter = await this.page.evaluate(() => {
      return performance.memory ? {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
      } : null;
    });
    
    if (memoryBefore && memoryAfter) {
      const memoryIncrease = memoryAfter.used - memoryBefore.used;
      console.log(`Memory increase: ${(memoryIncrease / 1024 / 1024).toFixed(2)}MB`);
    }
  }

  async runTests() {
    try {
      await this.init();
      
      console.log('🚀 Starting Performance Tests...\n');
      
      // Test current implementation
      await this.measurePageLoad('http://localhost:8084/products', 'Current Implementation');
      
      // Test database queries
      await this.testDatabaseQueries();
      
      // Test memory usage
      await this.testMemoryUsage();
      
      // Generate report
      this.generateReport();
      
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }

  generateReport() {
    console.log('\n📊 Performance Test Results');
    console.log('============================');
    
    this.results.forEach(result => {
      console.log(`\n${result.testName}:`);
      console.log(`  Load Time: ${result.loadTime}ms`);
      console.log(`  Filter Time: ${result.filterTime}ms`);
      console.log(`  DOM Content Loaded: ${result.domContentLoaded}ms`);
      console.log(`  First Paint: ${result.firstPaint}ms`);
      console.log(`  First Contentful Paint: ${result.firstContentfulPaint}ms`);
      console.log(`  DOM Elements: ${result.domSize}`);
      
      if (result.memoryUsage) {
        console.log(`  Memory Used: ${(result.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      }
    });
    
    // Save results to file
    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  const tester = new PerformanceTester();
  tester.runTests();
}

module.exports = PerformanceTester; 