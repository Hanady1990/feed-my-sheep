CREATE TABLE public.push_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint text NOT NULL UNIQUE,
  p256dh text NOT NULL,
  auth text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  language text NOT NULL DEFAULT 'en',
  enabled boolean NOT NULL DEFAULT true
);

ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert subscriptions" ON public.push_subscriptions
  FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Anyone can read subscriptions" ON public.push_subscriptions
  FOR SELECT TO public USING (true);

CREATE POLICY "Anyone can update subscriptions" ON public.push_subscriptions
  FOR UPDATE TO public USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can delete subscriptions" ON public.push_subscriptions
  FOR DELETE TO public USING (true);