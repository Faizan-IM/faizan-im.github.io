---
title: Handyman Outreach
headline: A cold-outreach engine that turns scraped lead CSVs into per-business personalized emails using a locally-hosted LLM — with deliverability guardrails (warmup ramp, jitter, business-hours sending) to protect sender reputation.
summary: >-
  Three independent stages — email extraction, dry-run generation, and real
  send. Each lead carries up to three customer-review snippets, and the model
  must open with one specific observation about that business rather than
  generic flattery. Built from the first commit as a sellable Python package.
status: Active build (~15%) · architecture locked
category: active
order: 4
role: Solo developer.
stack:
  - Python 3.12
  - Ollama + Qwen 2.5 (local)
  - Playwright
  - SQLite
  - Gmail SMTP
pullQuote: Deliverability is the real bottleneck, not the code.
highlights:
  - "Local-LLM personalization (Qwen 2.5 via Ollama): zero API cost, zero data leakage."
  - "Review-driven openers — the personalization wedge over template-blasted cold email."
  - "Deliverability discipline: a warmup ramp (15 → 25 → 40/day), 90–180s jitter between sends, a business-hours window, and subject-line variation."
  - "SQLite sent-log for deduplication and audit trail; an auto-appended CAN-SPAM-compliant footer."
  - "Strict prompt engineering: JSON-only output, a forbidden-phrase blocklist, and word-count caps."
metrics:
  - ~15% built, architecture complete
  - target 40 personalized sends/day per account
  - documented path past 50/day with a dedicated domain + SPF/DKIM/DMARC
---

> Deliverability is the real bottleneck, not the code.

That operational insight is what shapes the whole engine. Generating personalized cold emails is the easy part; getting them into an inbox without burning the sending account is the hard part — so the architecture is organized around protecting sender reputation first.

## Three independent stages

The pipeline runs as three independent stages — **email extraction**, **dry-run generation**, and **real send** — so the expensive and risky step (sending) is cleanly separated from generation and can be reviewed before anything goes out.

## Personalization that earns a reply

Each lead carries up to three customer-review snippets, and the prompt requires the model to open with **one specific observation about that business** rather than generic flattery. That review-driven opener is the personalization wedge over template-blasted cold email. The model is **Qwen 2.5 run locally via Ollama** — zero API cost and zero data leakage — kept on a tight leash with JSON-only output, a forbidden-phrase blocklist, and word-count caps.

## Deliverability discipline

The guardrails are the product:

- A **warmup ramp** (15 → 25 → 40/day) so volume grows the way a real account would.
- **90–180s jitter** between sends and a **business-hours window**, with subject-line variation.
- A **SQLite sent-log** for deduplication and an audit trail, plus an auto-appended CAN-SPAM-compliant footer.

It is built from the first commit as a sellable Python package. The current state is **~15% built with the architecture locked**, targeting 40 personalized sends/day per account, with a documented path past 50/day on a dedicated domain with SPF/DKIM/DMARC.
