-- Provider interest registrations table
CREATE TABLE IF NOT EXISTS public.provider_registrations (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email        TEXT NOT NULL,
  provider_type TEXT NOT NULL CHECK (provider_type IN ('stonemason', 'funeral-director', 'both')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Allow anyone (anon) to insert — no auth required for a public interest form
ALTER TABLE public.provider_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_public_insert" ON public.provider_registrations
  FOR INSERT TO anon WITH CHECK (true);

-- Only the service role (server-side) can read registrations
CREATE POLICY "allow_service_read" ON public.provider_registrations
  FOR SELECT USING (auth.role() = 'service_role');
