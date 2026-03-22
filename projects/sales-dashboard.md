# Sales Intelligence Dashboard

A regional sales team was running on spreadsheets — seven people spending a combined 8 hours every Friday pulling numbers, formatting tables, and emailing PDFs that were outdated by Monday. This is how I replaced that.

## The Problem

The company had Salesforce as its CRM but no single view of pipeline health across regions. Every regional manager ran their own report in their own format. Leadership had no reliable way to compare performance or spot trends until the weekly meeting — and even then, the data was a week old.

## My Approach

I started by mapping every field the managers actually used in their spreadsheets. Most of the custom columns were either duplicates or proxies for data already in Salesforce. After three sessions with the team, we agreed on a canonical set of metrics.

From there I built the data model in Power BI using DirectQuery against Salesforce, so reports refresh automatically. The layout was designed around the questions leadership actually asked in meetings, not around what was easy to pull.

## What I Built

- **Pipeline overview** — total value, stage distribution, and velocity per region
- **Rep leaderboard** — deals closed, average deal size, win rate
- **Forecast vs. actuals** — rolling 90-day view with variance highlighting
- **Drill-through pages** — click any region to see individual deals and rep activity

## Results

| Metric | Before | After |
|---|---|---|
| Time to weekly report | 8h combined | 0 (automatic) |
| Data freshness | Weekly | Real-time |
| Regions covered | 6 (inconsistent) | 6 (unified) |
| Pipeline visibility | PDF snapshot | Live drill-down |

Leadership started using the dashboard in their daily standups within two weeks of launch.

## Tools Used

- **Power BI** — data model, DAX measures, report layout
- **Salesforce** — source CRM via DirectQuery
- **Power Query** — light transformations and field normalization

## Lessons Learned

DirectQuery is great for freshness but unforgiving on model complexity. I had to simplify a few calculated columns I'd originally written as DAX measures — moving logic upstream into Power Query reduced query times significantly.
