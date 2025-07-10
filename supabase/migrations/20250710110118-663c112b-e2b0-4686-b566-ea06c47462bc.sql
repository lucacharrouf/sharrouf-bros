-- Create requested_quotes table to store quote requests from the contact form
CREATE TABLE public.requested_quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  machine_category TEXT,
  production_volume TEXT,
  project_details TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.requested_quotes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests" 
ON public.requested_quotes 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading quotes (for admin access later)
CREATE POLICY "Anyone can view quote requests" 
ON public.requested_quotes 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_requested_quotes_updated_at
BEFORE UPDATE ON public.requested_quotes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();