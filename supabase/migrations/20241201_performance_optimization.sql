-- Performance Optimization Migration
-- Add indexes for better query performance

-- Index on brand for faster brand filtering
CREATE INDEX IF NOT EXISTS idx_machines_brand ON machines(brand);

-- Index on status for faster condition filtering
CREATE INDEX IF NOT EXISTS idx_machines_status ON machines(status);

-- Index on category_id for faster category filtering
CREATE INDEX IF NOT EXISTS idx_machines_category_id ON machines(category_id);

-- Composite index for common filter combinations
CREATE INDEX IF NOT EXISTS idx_machines_brand_status ON machines(brand, status);

-- Index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_machines_created_at ON machines(created_at);

-- Partial index for non-null brands (most queries filter out null brands)
CREATE INDEX IF NOT EXISTS idx_machines_brand_not_null ON machines(brand) WHERE brand IS NOT NULL;

-- Partial index for non-null status (most queries filter out null status)
CREATE INDEX IF NOT EXISTS idx_machines_status_not_null ON machines(status) WHERE status IS NOT NULL;

-- Index on serial_no for unique lookups
CREATE INDEX IF NOT EXISTS idx_machines_serial_no ON machines(serial_no);

-- Analyze tables to update statistics
ANALYZE machines;
ANALYZE machine_categories;

-- Create a materialized view for frequently accessed summary data
CREATE MATERIALIZED VIEW IF NOT EXISTS machine_summary AS
SELECT 
    brand,
    status,
    category_id,
    COUNT(*) as count,
    AVG(purchase_price) as avg_purchase_price,
    MIN(purchase_price) as min_purchase_price,
    MAX(purchase_price) as max_purchase_price
FROM machines 
WHERE brand IS NOT NULL 
GROUP BY brand, status, category_id;

-- Create index on materialized view
CREATE INDEX IF NOT EXISTS idx_machine_summary_brand_status ON machine_summary(brand, status);

-- Function to refresh materialized view
CREATE OR REPLACE FUNCTION refresh_machine_summary()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW machine_summary;
END;
$$ LANGUAGE plpgsql;

-- Create a function to get machines with optimized query
CREATE OR REPLACE FUNCTION get_machines_filtered(
    p_category_id INTEGER DEFAULT NULL,
    p_brand TEXT DEFAULT NULL,
    p_status TEXT DEFAULT NULL,
    p_limit INTEGER DEFAULT 50,
    p_offset INTEGER DEFAULT 0
)
RETURNS TABLE (
    model TEXT,
    brand TEXT,
    status TEXT,
    category_id INTEGER,
    serial_no TEXT,
    purchase_price NUMERIC,
    created_at TIMESTAMP
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        m.model,
        m.brand,
        m.status,
        m.category_id,
        m.serial_no,
        m.purchase_price,
        m.created_at
    FROM machines m
    WHERE (p_category_id IS NULL OR m.category_id = p_category_id)
      AND (p_brand IS NULL OR m.brand = p_brand)
      AND (p_status IS NULL OR m.status = p_status)
    ORDER BY m.created_at DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Grant necessary permissions
GRANT SELECT ON machine_summary TO anon;
GRANT SELECT ON machine_summary TO authenticated;
GRANT EXECUTE ON FUNCTION get_machines_filtered TO anon;
GRANT EXECUTE ON FUNCTION get_machines_filtered TO authenticated; 