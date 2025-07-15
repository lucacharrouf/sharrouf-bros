-- Add image_url and link fields to machines table
ALTER TABLE machines 
ADD COLUMN IF NOT EXISTS image_url TEXT,
ADD COLUMN IF NOT EXISTS link TEXT;

-- Add comments for documentation
COMMENT ON COLUMN machines.image_url IS 'URL to the machine image';
COMMENT ON COLUMN machines.link IS 'URL to the machine details page or external link';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_machines_image_url ON machines(image_url) WHERE image_url IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_machines_link ON machines(link) WHERE link IS NOT NULL; 