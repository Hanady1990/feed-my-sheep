ALTER TABLE public.articles
ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}'::jsonb;

CREATE INDEX IF NOT EXISTS idx_articles_metadata ON public.articles USING GIN (metadata);