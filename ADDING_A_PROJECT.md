# Adding a New Project

## Quick checklist

1. Add an entry to `projects/index.json`
2. Create `projects/your-slug.md`
3. (Optional) Add images to `projects/assets/`
4. Commit and push

---

## Step 1 — Add metadata to `projects/index.json`

Open the file and append a new object to the array. Copy this template:

```json
{
  "slug": "your-slug",
  "title": "Your Project Title",
  "description": "One or two sentences shown on the card. Keep it under 160 characters.",
  "type": "Data Visualization",
  "tools": ["Power BI", "SQL"],
  "color": "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
  "date": "2025-03",
  "featured": false,
  "metrics": [
    { "value": "$12M", "label": "Pipeline tracked" },
    { "value": "−70%", "label": "Query time" }
  ]
}
```

**Field reference:**

| Field | Required | Notes |
|---|---|---|
| `slug` | yes | URL-safe, lowercase, hyphens only. Must match the `.md` filename. |
| `title` | yes | Shown on the card and the detail page. |
| `description` | yes | Shown on the card only. |
| `type` | yes | Must match one of the filter buttons: `Data Analysis`, `Data Engineering`, `Visualization`, `Automation`. |
| `tools` | yes | Array. Must match filter buttons: `Python`, `SQL`, `Power BI`, `Tableau`, `dbt`, `n8n`, `React`. |
| `color` | yes | CSS gradient for the card thumbnail. Pick from the examples below. |
| `date` | yes | Format `YYYY-MM`. Used for ordering (not yet displayed). |
| `featured` | no | Set to `true` to include it in the 4-card showcase on the homepage. Only 4 cards fit — unfeatured projects still appear on the Projects page. |
| `metrics` | no | Up to 3 impact numbers shown on the card and the detail page header. |

**Color presets:**

```
Blue    linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)
Purple  linear-gradient(135deg, #2d1b69 0%, #7c3aed 100%)
Green   linear-gradient(135deg, #064e3b 0%, #10b981 100%)
Orange  linear-gradient(135deg, #7c2d12 0%, #f97316 100%)
Pink    linear-gradient(135deg, #831843 0%, #ec4899 100%)
```

---

## Step 2 — Create `projects/your-slug.md`

The filename must exactly match the `slug` field from `index.json`.

Use this structure (sections are suggestions, not required):

```markdown
# Project Title

Short intro — what this is and why it matters.

## The Problem

What situation triggered this project? What was broken or missing?

## My Approach

How did you think about it? What decisions did you make and why?

## What I Built

- **Feature or deliverable** — brief explanation
- **Another deliverable** — brief explanation

## Results

| Metric | Before | After |
|---|---|---|
| Time to report | 8h/week | Automatic |
| Data freshness | Weekly | Real-time |

## Tools Used

- **Power BI** — what you used it for
- **SQL** — what you used it for

## Lessons Learned

What would you do differently? What surprised you?
```

### Adding images

Put images in `projects/assets/` and reference them in the markdown:

```markdown
![Dashboard overview](projects/assets/sales-dashboard-overview.png)
```

Recommended: export screenshots at 1400px wide, save as `.webp` for smaller file size.

---

## Step 3 — Verify locally

Open `projects.html` in a browser (via a local server, not by opening the file directly — `fetch()` won't work on `file://`).

Quick way with Python:
```bash
cd /path/to/davibarroso.com
python3 -m http.server 8000
# open http://localhost:8000/projects.html
```

Check:
- Card appears in the grid
- Filters work for your type and tools
- Clicking "View case study" opens the detail page correctly
- Images load (if any)

---

## Step 4 — Commit and push

```bash
git add projects/index.json projects/your-slug.md projects/assets/
git commit -m "Add project: Your Project Title"
git push
```

---

## Removing the whole system

If you decide to drop the markdown approach entirely:

1. Delete `project-loader.js`, `project.html`, `project.css`, `projects/`
2. In `projects.html`, remove:
   - `<link rel="stylesheet" href="project.css" />`
   - `<script src="project-loader.js"></script>`

The original hardcoded cards will reappear automatically.
