---
title: Shoebox · Execution Plan
headline: An execution plan for an offline-first Windows app for Pakistani shoe wholesalers — style-color-size matrix entry, bilingual dealer credit ledgers, broker-commission reconciliation, and FBR-ready invoicing — sold person-to-person in market clusters.
summary: >-
  A ~900-line vertical-SaaS plan covering the competitive landscape (the real
  competitor is the status quo: Excel + paper ledgers + WhatsApp), a verified
  2025–26 regulatory baseline, a pack architecture for vertical extension,
  pricing, go-to-market, financials, and a 20-item anti-recommendation list.
  Deferred after honestly renegotiating the pilot's timeline rather than
  shipping a half-built v1.
status: Planned · deferred (strategy artifact)
category: planned
order: 7
role: Solo planner / architect.
stack:
  - Electron (planned)
  - React 18 + TypeScript (planned)
  - better-sqlite3 (planned)
  - Cloudflare Worker + KV — licensing (planned)
highlights:
  - "A pack architecture so future verticals (shoe retail, garments, kiryana) ship as activated modules rather than forks."
  - "A hardware-fingerprint license with offline grace, and no telemetry — privacy as a deliberate wedge for a distrustful market."
  - "A 20-item anti-recommendation list (e.g. integer paisa never floats, no cloud sync in v1, no subscription pricing)."
  - "Industrial targets: 50,000 SKUs, 500 invoices/day per terminal, <100ms search, zero data loss on crash."
metrics:
  - ~900-line plan
  - 20 anti-recommendations
  - 50k-SKU and 500-invoice/day targets
---

Like PharmaERP-PK, Shoebox is a **discipline and strategy artifact** — a ~900-line execution plan for an offline-first Windows app for Pakistani shoe wholesalers. And like its sibling, the most instructive decision in it is the decision to wait.

## An honest timeline renegotiation

The plan was **deferred after honestly renegotiating the pilot's timeline** rather than shipping a half-built v1. That choice — naming the real schedule instead of papering over it — is the through-line of both planning artifacts: senior judgment is as much about what you decline to ship as what you ship.

## The competitor is the status quo

The competitive analysis is refreshingly clear-eyed: the real competitor is not another app, it is **Excel + paper ledgers + WhatsApp.** The product earns its place only by beating that habit. Around that premise sits a verified 2025–26 regulatory baseline, pricing, go-to-market, and financials.

## Built for extension, fingerprinted for trust

The architecture anticipates the second product before the first ships:

- A **pack architecture** so future verticals — shoe retail, garments, kiryana — arrive as activated modules rather than forks.
- A **hardware-fingerprint license with offline grace and no telemetry** — privacy treated as a deliberate wedge for a distrustful market.
- **Industrial targets**: 50,000 SKUs, 500 invoices/day per terminal, sub-100ms search, zero data loss on crash.

## The anti-recommendation list

The standout is a **20-item anti-recommendation list** — explicit guardrails like *integer paisa never floats, no cloud sync in v1, no subscription pricing.* Writing down what you will deliberately *not* do is a discipline most plans skip; here it is the centerpiece.
