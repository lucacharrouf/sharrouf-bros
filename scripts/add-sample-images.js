// Script to add sample image URLs and links to machines
// Run this with: node scripts/add-sample-images.js

const { createClient } = require('@supabase/supabase-js');

// You'll need to set these environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample image URLs for woodworking machinery (from Unsplash)
const sampleImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Industrial machinery
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Woodworking tools
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // CNC machine
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Panel saw
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Edge bander
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Boring machine
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Sanding machine
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', // Assembly equipment
];

// Sample links for different machine manufacturers
const sampleLinks = [
  'https://www.scmgroup.com/en/scmwooc',
  'https://www.casadeibusellato.com/en/pr',
  'https://www.robland.com/en/products',
  'https://www.omcmachinery.com/products',
  'https://www.scmgroup.com/en/scmwooc',
  'https://www.casadeibusellato.com/en/pr',
  'https://www.robland.com/en/products',
  'https://www.omcmachinery.com/products',
];

async function addSampleImages() {
  try {
    console.log('Fetching machines...');
    
    // Get all machines
    const { data: machines, error } = await supabase
      .from('machines')
      .select('serial_no, image_url, link')
      .limit(100);

    if (error) {
      console.error('Error fetching machines:', error);
      return;
    }

    console.log(`Found ${machines.length} machines`);

    // Update machines with sample data
    for (let i = 0; i < machines.length; i++) {
      const machine = machines[i];
      const imageIndex = i % sampleImages.length;
      const linkIndex = i % sampleLinks.length;

      const { error: updateError } = await supabase
        .from('machines')
        .update({
          image_url: sampleImages[imageIndex],
          link: sampleLinks[linkIndex]
        })
        .eq('serial_no', machine.serial_no);

      if (updateError) {
        console.error(`Error updating machine ${machine.serial_no}:`, updateError);
      } else {
        console.log(`Updated machine ${machine.serial_no} with image and link`);
      }
    }

    console.log('Sample images and links added successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

addSampleImages(); 