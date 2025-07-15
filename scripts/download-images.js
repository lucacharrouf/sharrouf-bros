// Script to download external images and store them in Supabase storage
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

// Use the actual Supabase credentials from the client
const SUPABASE_URL = "https://fmgjufiqvercuqfapegj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZ2p1ZmlxdmVyY3VxZmFwZWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTY4MjIsImV4cCI6MjA2NTA5MjgyMn0.YhUV7KOg8sBSsaqxpCPMdHHcxn2jgoOUAdoiTHnrG-s";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function downloadAndStoreImages() {
  try {
    console.log('Fetching machines with external images...');
    
    // Get all machines with image_url
    const { data: machines, error } = await supabase
      .from('machines')
      .select('serial_no, model, brand, image_url')
      .not('image_url', 'is', null)
      .limit(10); // Start with a few to test

    if (error) {
      console.error('Error fetching machines:', error);
      return;
    }

    console.log(`Found ${machines.length} machines with images`);

    for (const machine of machines) {
      try {
        console.log(`Processing ${machine.model} (${machine.serial_no})...`);
        
        // Download the image
        const response = await fetch(machine.image_url);
        if (!response.ok) {
          console.error(`Failed to download image for ${machine.serial_no}: ${response.status}`);
          continue;
        }

        const imageBuffer = await response.buffer();
        const contentType = response.headers.get('content-type') || 'image/jpeg';
        const fileExtension = contentType.includes('jpeg') ? 'jpg' : 'png';
        
        // Create a unique filename
        const fileName = `machines/${machine.serial_no}.${fileExtension}`;
        
        // Upload to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('machine-images')
          .upload(fileName, imageBuffer, {
            contentType: contentType,
            upsert: true
          });

        if (uploadError) {
          console.error(`Failed to upload image for ${machine.serial_no}:`, uploadError);
          continue;
        }

        // Get the public URL
        const { data: urlData } = supabase.storage
          .from('machine-images')
          .getPublicUrl(fileName);

        // Update the machine record with the new local URL
        const { error: updateError } = await supabase
          .from('machines')
          .update({ image_url: urlData.publicUrl })
          .eq('serial_no', machine.serial_no);

        if (updateError) {
          console.error(`Failed to update machine ${machine.serial_no}:`, updateError);
        } else {
          console.log(`Successfully processed ${machine.serial_no}: ${urlData.publicUrl}`);
        }

      } catch (error) {
        console.error(`Error processing ${machine.serial_no}:`, error);
      }
    }

    console.log('Image download and storage completed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

downloadAndStoreImages(); 