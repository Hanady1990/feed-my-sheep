
-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  section TEXT NOT NULL CHECK (section IN ('teachings', 'fathers', 'papal', 'vatican', 'heresies', 'social', 'saints')),
  title TEXT NOT NULL,
  title_ar TEXT NOT NULL DEFAULT '',
  subtitle TEXT DEFAULT '',
  subtitle_ar TEXT DEFAULT '',
  author TEXT DEFAULT '',
  date TEXT DEFAULT '',
  read_time TEXT DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  content_ar TEXT NOT NULL DEFAULT '',
  catechism_refs JSONB NOT NULL DEFAULT '[]',
  related_ids TEXT[] NOT NULL DEFAULT '{}',
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create saints table
CREATE TABLE public.saints (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_en TEXT NOT NULL,
  name_ar TEXT NOT NULL DEFAULT '',
  feast_en TEXT NOT NULL DEFAULT '',
  feast_ar TEXT NOT NULL DEFAULT '',
  years TEXT DEFAULT '',
  image_url TEXT DEFAULT '',
  bio_en TEXT NOT NULL DEFAULT '',
  bio_ar TEXT NOT NULL DEFAULT '',
  full_bio_en TEXT NOT NULL DEFAULT '',
  full_bio_ar TEXT NOT NULL DEFAULT '',
  patron_of_en TEXT DEFAULT '',
  patron_of_ar TEXT DEFAULT '',
  sayings JSONB NOT NULL DEFAULT '[]',
  books JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create heresies table
CREATE TABLE public.heresies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  name_ar TEXT NOT NULL DEFAULT '',
  period TEXT DEFAULT '',
  period_ar TEXT DEFAULT '',
  founder TEXT DEFAULT '',
  founder_ar TEXT DEFAULT '',
  summary TEXT NOT NULL DEFAULT '',
  summary_ar TEXT NOT NULL DEFAULT '',
  council_response TEXT DEFAULT '',
  council_response_ar TEXT DEFAULT '',
  categorical_refs TEXT[] NOT NULL DEFAULT '{}',
  key_figures TEXT[] NOT NULL DEFAULT '{}',
  key_figures_ar TEXT[] NOT NULL DEFAULT '{}',
  points JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quiz_questions table
CREATE TABLE public.quiz_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  game_type TEXT NOT NULL CHECK (game_type IN ('bible-quiz', 'truth-vs-heresy')),
  question_en TEXT NOT NULL,
  question_ar TEXT NOT NULL DEFAULT '',
  options JSONB NOT NULL DEFAULT '[]',
  correct_index INTEGER DEFAULT 0,
  is_truth BOOLEAN DEFAULT true,
  explanation_en TEXT DEFAULT '',
  explanation_ar TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.heresies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Anyone can read saints" ON public.saints FOR SELECT USING (true);
CREATE POLICY "Anyone can read heresies" ON public.heresies FOR SELECT USING (true);
CREATE POLICY "Anyone can read quiz_questions" ON public.quiz_questions FOR SELECT USING (true);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON public.articles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_saints_updated_at BEFORE UPDATE ON public.saints FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_heresies_updated_at BEFORE UPDATE ON public.heresies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
