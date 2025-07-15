-- Create machine_categories table
CREATE TABLE IF NOT EXISTS machine_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some default categories
INSERT INTO machine_categories (id, name, description) VALUES
    (1, 'Panel Saws', 'Panel saws for cutting large panels'),
    (2, 'Edge Banders', 'Edge banding machines'),
    (3, 'CNC Routers', 'Computer numerical control routers'),
    (4, 'Boring Machines', 'Boring and drilling machines'),
    (5, 'Sanding Machines', 'Sanding and finishing equipment'),
    (6, 'Assembly Equipment', 'Assembly and joining equipment')
ON CONFLICT (id) DO NOTHING;

-- Grant permissions
GRANT SELECT ON machine_categories TO anon;
GRANT SELECT ON machine_categories TO authenticated;
GRANT INSERT, UPDATE, DELETE ON machine_categories TO authenticated;

-- Create trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_machine_categories_updated_at 
    BEFORE UPDATE ON machine_categories 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 