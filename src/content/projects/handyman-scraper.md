---
title: Handyman Scraper
headline: A production Google Maps lead-extraction engine that grids entire metros, enriches each business with website-scraped emails, and outputs sales-ready CSVs at 800–1,500 businesses per major US city.
summary: >-
  Grids any US city into 20+ neighborhood-level queries to beat Google's
  per-query result cap, then visits each business's site to extract emails (a
  fast HTTP fetch first, with a full browser fallback for Cloudflare-protected
  or JS-rendered sites). Engineered for unattended overnight runs on a single
  residential IP, with crash-safe resume across multi-day scrapes.
status: Production · used in commerce
category: production
featured: true
order: 3
role: Solo developer; operated in commerce, delivering real CSVs to a US-based solar lead reseller.
stack:
  - Python 3.12
  - Playwright (async Chromium)
  - httpx
  - SQLite
  - Pandas
highlights:
  - "Grid search across 20+ neighborhoods per city to bypass Google's ~120-result-per-query cap."
  - "Two-tier email enrichment (httpx → Playwright) that covers Cloudflare-protected sites."
  - "SQLite place_id deduplication across the tool's entire history — no listing is scraped twice, ever."
  - "Atomic JSON + CSV writes after every listing; resume-on-failure tested in production (a laptop battery died mid-run and the scraper resumed cleanly)."
  - "Anti-detection via randomized delays and rotating browser contexts."
metrics:
  - 47 plumbers across 21 Atlanta queries
  - 35 Houston + 97 Dallas solar companies delivered to a real client
  - 98% phone fill rate
  - 41% email fill rate
  - documented path to 30–50k listings/month with residential proxies
---

**Engineered for unattended overnight runs on a single residential IP, with crash-safe resume across multi-day scrapes.** That sentence is the whole design brief — everything else follows from it.

## Beating Google's result cap with a grid

A single Google Maps query caps out around 120 results, which badly undercounts a major metro. The scraper grids any US city into **20+ neighborhood-level queries**, so a metro that would return a few hundred listings under one query yields 800–1,500 businesses instead.

## Two-tier email enrichment

For each business it visits the website to extract an email, fast path first: an `httpx` fetch handles the common case cheaply, and a full Playwright browser fallback handles Cloudflare-protected or JS-rendered sites that the fast path can't read. The result is broad email coverage without paying browser cost on every site.

## Built to survive long runs

Robustness is the point, not an afterthought:

- **SQLite `place_id` deduplication** across the tool's entire history — no listing is ever scraped twice.
- **Atomic JSON + CSV writes after every listing**, with resume-on-failure proven in production: a laptop battery died mid-run and the scraper resumed cleanly.
- **Anti-detection** via randomized delays and rotating browser contexts.

## The proof is the delivered numbers

The tool has operated in commerce, delivering real CSVs to a US-based solar lead reseller: **47 plumbers across 21 Atlanta queries; 35 Houston and 97 Dallas solar companies** delivered to a real client, at a **98% phone fill rate** and **41% email fill rate**. There is a documented path to 30–50k listings/month with residential proxies.
