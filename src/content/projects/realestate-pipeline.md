---
title: National Real Estate Data Pipeline
headline: A nationwide US property-intelligence pipeline — ~140M parcels, ~95% county coverage, motivated-seller scoring — built solo on $0 infrastructure in 90 days.
summary: >-
  Ingests parcel records from ~95% of US counties, layers distress signals (tax
  delinquency, foreclosure, liens, probate, eviction), matches active
  Zillow/Redfin/Realtor listings, and produces a 0–100 motivated-seller score
  per parcel. The feasibility insight: ~70% of US counties run on just five
  software platforms, so ten vendor-aware scrapers replace thousands of
  county-specific ones.
status: In delivery — 90-day contract
category: production
featured: true
order: 1
role: Solo developer under contract — with rights to productize the codebase as an independent SaaS (a competitor to PropStream/BatchLeads in the $50–300/seat/month market).
stack:
  - Python 3.12 (uv)
  - Postgres 16 + PostGIS
  - DuckDB
  - Polars
  - Playwright / nodriver
  - Cloudflare R2 + Workers
  - Oracle Cloud ARM
  - GitHub Actions
  - Streamlit
highlights:
  - "Vendor-consolidation strategy: ten platform-aware scrapers (Schneider, Tyler, Harris Govern, gWorks, ActDataScout) cover ~70% of counties; bulk public datasets cover another 30–40%."
  - "Postgres SELECT FOR UPDATE SKIP LOCKED job queue — deliberately chosen over Redis/RabbitMQ to minimize moving parts for a solo build."
  - "Raw-page provenance: every page is zstd-compressed to Cloudflare R2 before parsing, so a schema change means re-parse, not re-scrape."
  - "A 0–100 lead score weighting equity, absentee ownership, ownership tenure, distress severity, and property traits; refreshable nightly."
  - "DuckDB-over-Parquet analytical layer for sub-second queries across ~140M rows."
  - "Distributed across three free compute tiers with built-in anti-detection (TLS fingerprinting, stealth headless, CAPTCHA OCR)."
metrics:
  - 3,143 counties targeted (~95% online)
  - ~140M parcels
  - 90–95% address-match target
  - ">95% field-accuracy QA target"
  - $0 infrastructure cost
---

**$0 infrastructure, ~95% US county coverage, ~140M parcels, 90 days, solo.** Every term in that sentence pulls against the others — which is exactly what makes the project interesting.

## The wedge that makes the timeline credible

A naïve nationwide property pipeline implies thousands of bespoke county scrapers. The feasibility insight reframes the problem: roughly **70% of US counties run on just five software platforms** — Schneider, Tyler, Harris Govern, gWorks, and ActDataScout. So the build leads with **ten platform-aware scrapers** rather than thousands of county-specific ones, and covers the remaining 30–40% with bulk public datasets. The same wedge that makes the work tractable for one person is what makes a 90-day timeline honest.

## A free-tier architecture, by design

The system is distributed across three free compute tiers, with anti-detection built in (TLS fingerprinting, stealth headless, CAPTCHA OCR). The job queue is plain Postgres using `SELECT FOR UPDATE SKIP LOCKED` — a deliberate choice over Redis or RabbitMQ to keep a solo operation's moving parts to a minimum. An analytical layer of DuckDB over Parquet answers sub-second queries across ~140M rows.

## Provenance before parsing

Every page is zstd-compressed and written to Cloudflare R2 **before** it is parsed. The payoff is operational: when a schema changes, the fix is a re-parse, not a re-scrape — the expensive, rate-limited part of the work is never repeated unnecessarily.

On top of the cleaned data sits a **0–100 motivated-seller score** that weighs equity, absentee ownership, ownership tenure, distress severity, and property traits, refreshable nightly. Distress signals — tax delinquency, foreclosure, liens, probate, eviction — are layered on, and active Zillow/Redfin/Realtor listings are matched in.

## The IP angle

The work is delivered under contract, but with rights to productize the codebase as an independent SaaS — positioned against PropStream and BatchLeads in the $50–300/seat/month market. The contract delivery and the product are the same engine.
