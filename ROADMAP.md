# Roadmap

## v0.1 — MVP (current)
Goal: prove the core loop — report, see it on a map, confirm it's still there.

- [ ] Submit a report (category, location, optional photo, optional description)
- [ ] Map view of all reports near the user
- [ ] List view as a fallback/complement to the map
- [ ] "Still there" confirmation button (updates last_confirmed_at, increments affected_count)
- [ ] Category filtering (pothole, water leak, crime alert, broken robot, illegal dumping, water outage, electricity outage)
- [ ] Anonymous reporting — no login required
- [ ] Basic rate limiting to prevent spam (device-based, client-side for v0.1)
- [ ] Deploy to GitHub Pages

## v0.2 — Trust & data quality
- [ ] Auto-fade / flag reports with no recent confirmations as "unconfirmed"
- [ ] Photo moderation basics (block obviously inappropriate uploads)
- [ ] Crime alert safety design: no naming individuals, aggregate/area-level only, review flow before publishing
- [ ] Shareable report links (deep link to a single report for WhatsApp sharing)
- [ ] Basic analytics (reports per category, per area) — for future municipal/media conversations

## v0.3 — Growth features
- [ ] "Near me" push notification opt-in (new report within X km)
- [ ] Community leaderboard (most active reporters/confirmers per area) — carefully designed to reward accuracy, not just volume
- [ ] Export/embed a public map widget for community Facebook groups or local news sites

## v1.0 — Scale decision point
Reassess based on real usage data:
- If traction is strong: move off free tiers to AWS/paid Supabase, consider municipal or media partnerships, explore monetization (data licensing, sponsored visibility for local services)
- If traction is weak: review what users actually used vs. ignored, pivot scope accordingly

## Explicitly out of scope for now
- Municipality system integration or official status updates
- User accounts / login (revisit only if abuse or personalization needs force it)
- Payment processing
- Native mobile apps (web-first, mobile-responsive)
