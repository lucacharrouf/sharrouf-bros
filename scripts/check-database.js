// Script to check what image_url and link data exists in the database
import { createClient } from '@supabase/supabase-js';

// Use the actual Supabase credentials from the client
const SUPABASE_URL = "https://fmgjufiqvercuqfapegj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZ2p1ZmlxdmVyY3VxZmFwZWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTY4MjIsImV4cCI6MjA2NTA5MjgyMn0.YhUV7KOg8sBSsaqxpCPMdHHcxn2jgoOUAdoiTHnrG-s";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function checkDatabase() {
  try {
    console.log('Checking machines table...');
    
    // Get all machines with image_url and link data
    const { data: machines, error } = await supabase
      .from('machines')
      .select('serial_no, model, brand, image_url, link')
      .limit(20);

    if (error) {
      console.error('Error fetching machines:', error);
      return;
    }

    console.log(`Found ${machines.length} machines`);
    console.log('\n=== MACHINE DATA ===');
    
    machines.forEach((machine, index) => {
      console.log(`\n${index + 1}. ${machine.model || 'Unknown Model'} (${machine.brand})`);
      console.log(`   Serial: ${machine.serial_no}`);
      console.log(`   Image URL: ${machine.image_url || 'NULL'}`);
      console.log(`   Link: ${machine.link || 'NULL'}`);
    });

    // Count machines with/without images
    const withImages = machines.filter(m => m.image_url).length;
    const withLinks = machines.filter(m => m.link).length;
    
    console.log('\n=== SUMMARY ===');
    console.log(`Machines with images: ${withImages}/${machines.length}`);
    console.log(`Machines with links: ${withLinks}/${machines.length}`);

  } catch (error) {
    console.error('Error:', error);
  }
}

checkDatabase(); 