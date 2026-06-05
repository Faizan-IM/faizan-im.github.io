---
title: Outdial · AI Outbound Sales Platform
headline: An end-to-end AI outbound sales platform — scrape local businesses, call them with a streaming voice agent, surface qualified leads — at roughly 10¢/call versus $15–20/hour for a human dialer.
summary: >-
  A single mono-repo (96 files, 22,000+ lines) combining a lead scraper, a
  real-time voice agent (Telnyx + Deepgram + GPT-4o-mini + Cartesia), and an
  orchestration API with a Next.js dashboard. The database schema is
  forward-compatible, so an email-outreach module slots in without a migration.
status: Active build · demo-able
category: production
featured: true
order: 2
role: Solo product owner and developer.
stack:
  - FastAPI
  - Next.js 16 (App Router)
  - SQLAlchemy 2.0 async
  - Telnyx
  - Deepgram nova-3
  - OpenAI GPT-4o-mini
  - Cartesia
  - Tailwind v4
  - shadcn/ui
highlights:
  - "Three loosely-coupled services in one repo: scraper, streaming voice agent, and orchestration API + dashboard."
  - "Streaming voice pipeline that dispatches LLM output to text-to-speech at sentence boundaries for low latency."
  - "Forward-compatible schema (email columns present from day one) — the outreach module slots in with no migration."
  - "Live scrape progress with polling auto-update; a rich lead-detail panel (photos, reviews, hours, contact)."
  - "Built on a current toolchain — Next.js 16 + Tailwind v4 + shadcn/ui — with a hydration-safe light/dark toggle and a premium type pairing instead of the default engineering look."
metrics:
  - 96 files
  - 22,000+ lines
  - ~10¢/call vs $15–20/hr human dialer
  - "end-to-end test: 6 real leads scraped → persisted → displayed"
---

The headline is a unit-economics line: **~10¢ per call against $15–20 an hour for a human dialer.** Outdial is the system that earns that number.

## One mono-repo, three services

Outdial is a single mono-repo — 96 files, 22,000+ lines — holding three loosely-coupled services: a lead scraper, a real-time voice agent, and an orchestration API paired with a Next.js dashboard. The mono-repo is a *deliberate* decision: for a solo product, keeping the three concerns version-locked in one place removes a class of integration drift that separate repos invite.

## The telephony stack is the centerpiece

The voice agent stitches together Telnyx, Deepgram nova-3, GPT-4o-mini, and Cartesia into a streaming pipeline. The latency trick is to dispatch LLM output to text-to-speech **at sentence boundaries** rather than waiting for a full completion — so the caller hears a natural response sooner.

## Engineering judgment, visible in the schema

The database schema is **forward-compatible by design**: email columns are present from day one, so an email-outreach module slots in with no migration. That is the kind of decision that costs nothing today and saves a painful migration later — a small, concrete signal of how the rest of the system is built.

The dashboard rounds it out: live scrape progress with polling auto-update, and a rich lead-detail panel showing photos, reviews, hours, and contact info. It runs on a current toolchain — Next.js 16, Tailwind v4, shadcn/ui — with a hydration-safe light/dark toggle and a premium type pairing rather than the default engineering look.

An end-to-end test exercised the whole path: **6 real leads scraped → persisted → displayed** in the dashboard.
