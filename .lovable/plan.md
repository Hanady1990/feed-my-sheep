## Add a Prayers section

A new top-level "Prayers" section organized into categories (Virgin Mary, Holy Spirit, Rosaries, Saints' prayers, etc.). Browseable by users, manageable by admins, bilingual EN/AR like the rest of the app.

### Data model

New Supabase table `prayers`:

- `id` uuid pk
- `slug` text unique
- `category` text — one of: `marian`, `holy_spirit`, `rosary`, `saints`, `morning_evening`, `eucharistic`, `general`
- `title`, `title_ar` text
- `subtitle`, `subtitle_ar` text (e.g. "Hail Mary", attribution)
- `content`, `content_ar` text (full prayer body)
- `tags` text[]
- `created_at`, `updated_at` timestamps
- RLS: public SELECT only; admin writes go through the existing `admin-auth` edge function

A short static fallback `src/data/prayers.ts` (a few well-known prayers per category) so the page works even when Supabase is empty/offline, matching the project's hybrid pattern.

### Pages & routes

- `/prayers` — `Prayers.tsx`: lists categories as cards (icon + name + count). Has a search box that filters across all prayers.
- `/prayers/:category` — `PrayerCategory.tsx`: lists prayers in that category with title, subtitle preview.
- `/prayers/:category/:slug` — `PrayerDetail.tsx`: full prayer text, language toggle respected, ShareMenu and copy-to-clipboard buttons.

### Navigation

- Desktop sidebar (`DesktopSidebar.tsx`): add "Prayers" entry with a `HandHeart` (or `Sparkles`) icon between Saints and Games.
- Mobile "More" page (`More.tsx`): add Prayers link in `moreLinks`.
- Home `/` quick-links grid: add a Prayers tile.

### Admin

- New `src/components/admin/AdminPrayers.tsx` wired into `AdminDashboard` as a new tab. Same UX as `AdminArticles`: list / create / edit / delete with category dropdown, bilingual fields, content textareas, tags.
- Extend the edge function `supabase/functions/admin-auth/index.ts` to allow `prayers` in `validTables`.

### Localization

Add EN/AR keys to `LanguageContext.tsx`:
`nav.prayers`, `prayers.title`, `prayers.subtitle`, `prayers.searchPlaceholder`, and one label per category (`prayers.cat.marian`, `prayers.cat.holySpirit`, `prayers.cat.rosary`, `prayers.cat.saints`, `prayers.cat.morningEvening`, `prayers.cat.eucharistic`, `prayers.cat.general`).

### Seed content

Insert a starter set so the section isn't empty: Hail Mary, Memorare, Angelus (marian); Come Holy Spirit, Veni Creator (holy_spirit); Joyful/Sorrowful/Glorious/Luminous Mysteries intro + how-to-pray (rosary); Prayer of St. Francis, Anima Christi (saints); Morning Offering, Act of Contrition (morning_evening); Adoro Te Devote (eucharistic); Our Father, Apostles' Creed, Glory Be (general). Bilingual EN/AR.

### Quiet runtime fix

`ShareMenu` is throwing "Permission denied" from `navigator.share` in some embedded preview contexts. Wrap the `navigator.share` call in a try/catch that silently falls back to the dropdown menu (don't toast on `NotAllowedError`/`AbortError`).

### Files

New: `supabase/migrations/<ts>_create_prayers.sql`, `src/data/prayers.ts`, `src/pages/Prayers.tsx`, `src/pages/PrayerCategory.tsx`, `src/pages/PrayerDetail.tsx`, `src/components/admin/AdminPrayers.tsx`.
Edited: `src/App.tsx` (routes), `src/components/DesktopSidebar.tsx`, `src/pages/More.tsx`, `src/pages/Index.tsx` (quick links), `src/contexts/LanguageContext.tsx`, `src/pages/AdminDashboard.tsx`, `supabase/functions/admin-auth/index.ts`, `src/components/ShareMenu.tsx`.