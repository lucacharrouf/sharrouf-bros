// Performance monitoring utility
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTimer(operation: string): () => void {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      this.recordMetric(operation, duration);
    };
  }

  recordMetric(operation: string, duration: number): void {
    if (!this.metrics.has(operation)) {
      this.metrics.set(operation, []);
    }
    this.metrics.get(operation)!.push(duration);

    // Log slow operations
    if (duration > 1000) {
      console.warn(`Slow operation detected: ${operation} took ${duration.toFixed(2)}ms`);
    }

    // Keep only last 100 measurements
    const measurements = this.metrics.get(operation)!;
    if (measurements.length > 100) {
      measurements.shift();
    }
  }

  getAverageTime(operation: string): number {
    const measurements = this.metrics.get(operation);
    if (!measurements || measurements.length === 0) {
      return 0;
    }
    return measurements.reduce((sum, time) => sum + time, 0) / measurements.length;
  }

  getMetrics(): Record<string, { average: number; count: number; latest: number }> {
    const result: Record<string, { average: number; count: number; latest: number }> = {};
    
    for (const [operation, measurements] of this.metrics.entries()) {
      result[operation] = {
        average: this.getAverageTime(operation),
        count: measurements.length,
        latest: measurements[measurements.length - 1] || 0,
      };
    }
    
    return result;
  }

  logMetrics(): void {
    const metrics = this.getMetrics();
    console.table(metrics);
  }
}

// Convenience functions
export const startTimer = (operation: string) => PerformanceMonitor.getInstance().startTimer(operation);
export const recordMetric = (operation: string, duration: number) => PerformanceMonitor.getInstance().recordMetric(operation, duration);
export const getAverageTime = (operation: string) => PerformanceMonitor.getInstance().getAverageTime(operation);
export const logMetrics = () => PerformanceMonitor.getInstance().logMetrics();

// React hook for performance monitoring
export const usePerformanceMonitor = (operation: string) => {
  const startTime = performance.now();
  
  return {
    end: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      recordMetric(operation, duration);
      return duration;
    },
    record: (duration: number) => recordMetric(operation, duration),
  };
}; 