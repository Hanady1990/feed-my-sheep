
CREATE TABLE public.prayers (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  category text NOT NULL DEFAULT 'general',
  title text NOT NULL,
  title_ar text NOT NULL DEFAULT '',
  subtitle text DEFAULT '',
  subtitle_ar text DEFAULT '',
  content text NOT NULL DEFAULT '',
  content_ar text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_prayers_category ON public.prayers(category);

ALTER TABLE public.prayers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read prayers" ON public.prayers
  FOR SELECT USING (true);

CREATE TRIGGER update_prayers_updated_at
BEFORE UPDATE ON public.prayers
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
