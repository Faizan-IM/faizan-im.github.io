---
title: SignalScout
headline: A multi-platform intent-mining engine that scrapes Reddit and Hacker News for people publicly voicing commercial pain, scores each post with a local LLM across eight dimensions, and outputs a daily ranked shortlist of ~20 qualified prospects.
summary: >-
  Reduces thousands of noisy daily posts into a 20-prospect shortlist with a
  pain summary, urgency, buyer-fit, decision-maker and budget signals,
  contactability, and a suggested outreach angle — scored entirely by a local
  Qwen 2.5 model. A plugin source architecture made pivoting cheap: when Hacker
  News proved a poor audience fit, a Reddit RSS source was added in an afternoon
  and produced 37 leads in a minute.
status: MVP shipped · end-to-end working
category: research-tool
order: 5
role: Solo developer.
stack:
  - Python 3.12
  - Ollama + Qwen 2.5 7B (local)
  - SQLite (WAL)
  - feedparser
  - Streamlit
  - Hacker News Firebase API
  - Reddit RSS
highlights:
  - "Plugin source architecture — adding a new platform means implementing a single method."
  - "Local LLM scoring on a 4GB consumer GPU; strict JSON-mode prompt tuned against anti-patterns (\"celebratory posts are never leads,\" \"when in doubt, score lower\")."
  - "Crash-safe per-item SQLite (WAL) with checkpoint resume on interrupt."
  - "Composite scoring with validated signal/noise separation; ~72% of items clear the threshold."
  - "Retention-aware two-table schema (60-day auto-purge for Reddit data) for a responsible-use compliance posture."
metrics:
  - 43 leads scored end-to-end in a Day-1 session
  - 31 (72%) above threshold
  - clean separation (qualified 20–27, noise 4–10)
  - ~42s/lead on a 4GB GPU
  - 24 subreddits monitored
---

The most telling thing about SignalScout is a pivot story. The engine was built **Hacker News first** — and when HN turned out to be a poor audience fit, a **Reddit RSS source was added in an afternoon** thanks to the plugin architecture, and it produced **37 real leads in one minute.** Cheap pivots are the dividend of the right abstraction.

## From noise to a 20-name shortlist

The job is intent mining: find people publicly voicing commercial pain, then cut thousands of noisy daily posts down to a ranked shortlist of ~20 prospects. Each surviving post comes annotated across eight dimensions — a pain summary, urgency, buyer-fit, decision-maker and budget signals, contactability, and a suggested outreach angle.

## A plugin source architecture

Adding a new platform means implementing **a single method** — which is precisely why the Reddit pivot took an afternoon rather than a rewrite. The system currently draws from the Hacker News Firebase API and Reddit RSS, monitoring 24 subreddits.

## Local scoring, tuned for restraint

Scoring runs entirely on a **local Qwen 2.5 7B model on a 4GB consumer GPU** (~42s/lead). The prompt is strict JSON-mode and tuned against the failure modes that make these systems noisy — *"celebratory posts are never leads,"* *"when in doubt, score lower."* The composite score shows **validated signal/noise separation**: in a Day-1 session, **43 leads were scored end-to-end, 31 (72%) cleared the threshold**, with a clean gap between qualified items (20–27) and noise (4–10).

## Responsible by construction

Persistence is crash-safe per-item SQLite (WAL) with checkpoint resume on interrupt. A retention-aware two-table schema auto-purges Reddit data after 60 days — a responsible-use compliance posture baked into the data model rather than bolted on.
