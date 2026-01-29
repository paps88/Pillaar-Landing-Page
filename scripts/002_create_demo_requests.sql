-- Create demo_requests table for provider sign-ups
CREATE TABLE IF NOT EXISTS public.demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow anonymous inserts" ON public.demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all entries (for admin purposes)
CREATE POLICY "Allow authenticated read" ON public.demo_requests
  FOR SELECT
  TO authenticated
  USING (true);
