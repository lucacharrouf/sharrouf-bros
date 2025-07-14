-- Create machine_categories table
CREATE TABLE public.machine_categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default machine categories
INSERT INTO public.machine_categories (name, description) VALUES
  ('Panel Saws', 'Machines for cutting panels and sheets'),
  ('Edge Banders', 'Machines for applying edge banding to panels'),
  ('CNC Routers', 'Computer numerical control routers for precision cutting'),
  ('Boring Machines', 'Machines for drilling holes and boring operations'),
  ('Moulders', 'Machines for molding and shaping wood'),
  ('Sanders', 'Machines for sanding and finishing surfaces'),
  ('Multiple Machines', 'Combination of different machine types'),
  ('Other', 'Other types of woodworking machinery');

-- Add category_id column to machines table
ALTER TABLE public.machines 
ADD COLUMN category_id INTEGER REFERENCES public.machine_categories(id);

-- Enable Row Level Security on machine_categories
ALTER TABLE public.machine_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for machine_categories
CREATE POLICY "Anyone can view machine categories" 
ON public.machine_categories 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates on machine_categories
CREATE TRIGGER update_machine_categories_updated_at
BEFORE UPDATE ON public.machine_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column(); 