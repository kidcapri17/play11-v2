-- Run once in Supabase SQL Editor. Service-role key must remain SERVER-SIDE ONLY.
create table if not exists public.daily_scores (
 id bigint generated always as identity primary key,
 user_id uuid not null references auth.users(id) on delete cascade,
 day date not null,
 display_name text not null check (char_length(display_name) between 1 and 24),
 score integer not null check (score between 0 and 400),
 completed_at timestamptz not null default now(),
 unique(user_id,day)
);
create index if not exists daily_scores_ranking on public.daily_scores(day,score desc,completed_at asc);
alter table public.daily_scores enable row level security;
-- No anon/authenticated direct table policies: only trusted server-side service role reads/writes.
