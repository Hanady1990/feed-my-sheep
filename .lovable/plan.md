# Fix: New prayers can't be opened from the list

## Root cause

In `src/components/admin/AdminPrayers.tsx`, the `slug` field is a free-text input with no validation or auto-generation. When you created the new prayer you left slug empty (or it was saved as ""), so the database row has `slug = ""`.

The card link in `src/pages/PrayerCategory.tsx` is built as:
```
/prayers/${category}/${p.slug}
```
With an empty slug, this becomes `/prayers/general/` — which matches the **category** route (`/prayers/:category`), not the detail route (`/prayers/:category/:slug`). That's exactly the URL you're stuck on. Hence "clicking does nothing."

It also explains why it appeared in the wrong section if you didn't notice the category dropdown defaulted to `general` — though we should double-check the category you actually picked.

## Changes

### 1. `src/components/admin/AdminPrayers.tsx`
- Add a small `slugify()` helper (lowercase, strip diacritics, replace non-alphanumerics with `-`, trim dashes).
- In `handleSave`, if `form.slug` is blank, derive it from `form.title` (fallback to `form.title_ar`). If still empty, show a toast error and abort.
- Also trim/normalize whatever the user typed in the slug field before sending.
- Mark the slug input placeholder as "Slug (auto from title if blank)" so it's clear it's optional.
- Optional safety: in `openEdit`, keep existing slug; never overwrite an existing one automatically.

### 2. `src/pages/PrayerCategory.tsx`
Defensive guard: when rendering the list, filter out any prayer whose `slug` is empty (so legacy bad rows don't render dead links). Show a small inline note in the admin instead — but on the public side just hide them.

### 3. Backfill the existing broken row
Use the data-insert tool to `UPDATE public.prayers SET slug = <slugified title> WHERE slug = '' OR slug IS NULL;` so the prayer you just created becomes openable without you having to recreate it.

## Quick audit of related admin forms (per your earlier "double-check" request)
Slug is also user-entered (no auto-gen) in `AdminArticles`, `AdminSaints`, `AdminHeresies`. They have the same latent bug — empty slug breaks detail routes. Scope of this fix is **prayers only** (matches what you reported); say the word if you want the same auto-slug treatment applied to the other three admin forms in the same pass.

## Out of scope
- No DB schema change. We could add a `CHECK (length(slug) > 0)` + unique index later, but it's not required to fix the bug.
- No changes to `usePrayer` / routing.
