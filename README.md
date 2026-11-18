# PLAY11 Version 2

Next.js football daily challenge site with four modes, UK date rotation, answer API, Supabase account sign-in and server-scored daily leaderboard.

## Run locally

Node 20+ (Node 22 recommended):

```bash
npm install
npm run dev
```

Open http://localhost:3000. The four games work without Supabase; accounts and leaderboard require setup.

## Supabase setup

1. Create a Supabase project at https://supabase.com.
2. In SQL Editor, run `supabase/schema.sql`.
3. In Authentication > Providers, enable Email. Configure confirmation settings and production Site URL appropriately.
4. In Project Settings > API (or Connect), copy Project URL, publishable/anon key, and service_role secret key.
5. In Vercel Project > Settings > Environment Variables add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (use the project's legacy anon key for compatibility)
   - `SUPABASE_SERVICE_ROLE_KEY` (secret; NEVER prefix NEXT_PUBLIC or commit it)
6. Redeploy the project. For local use, copy `.env.example` to `.env.local` and fill values. Never upload `.env.local`.

## Deployment using GitHub website (no Git CLI)

For a clean V2 replacement, make a NEW GitHub repository `play11-v2` and upload the ZIP's **contents** preserving directory paths. Do not upload the ZIP itself, `node_modules`, `.next`, or `.env.local`. GitHub web drag/drop may flatten directories; check paths before deploying. A more reliable browser-only approach is to create files via **Add file > Create new file** and type full relative paths, or use github.dev (press `.` in repository) to create folders and paste files, then commit. Alternatively use GitHub Desktop once disk space allows.

On Vercel: New Project > import `play11-v2` > Next.js preset > Root Directory `./` > Deploy. Test on a preview URL first, then assign the existing PLAY11 domain to the new project when ready; remove it from the old project if prompted. Do not delete your existing live project until V2 works.

## Important limitations before public marketing

- Question bank has **24 demo entries**, six per game, repeating after six days. Add a much larger, verified and licensed question bank before launch.
- Answer-check API reveals the correct answer immediately after a guess; a determined player can exploit it. Server calculates leaderboard score from submitted guesses, but the client can obtain answers before submitting. For competitive prizes, replace with an attempt-recording API that stores first guesses server-side and limits submissions.
- No rate limiting or abuse protection. Add before scaling.
- This prototype's privacy page is a draft; obtain legal review, a contact/deletion process and appropriate consent controls before ads.
- Scores are saved once per account per day. Local progress persists only in the same browser.
- Vercel Pro or other commercial-use-permitted hosting is needed for monetized use; AdSense approval is not guaranteed.
- Do not use official badges/player photos without appropriate rights.
