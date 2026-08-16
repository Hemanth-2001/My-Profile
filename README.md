# My-Profile

Minimal, modern profile site for **Hemanth Kumar Nalla** — SDET / QA Automation Engineer.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Single-page profile (hero, stats, experience, projects, skills, education, contact) |
| `styles.css` | Design system: light theme, responsive layout, animations, print styles |
| `script.js` | Interactions: resume modal, email copy, scroll reveal, mobile nav |
| `Hemanth_Nalla_SDET.pdf` | Resume — linked from the "View Resume" / "Download PDF" buttons |

## Run locally

```bash
python -m http.server 4173
```

Then open http://localhost:4173 — or just open `index.html` directly.

## Resume

The site links directly to `Hemanth_Nalla_SDET.pdf` (download buttons and the in-page
modal preview). If you replace your resume, keep that filename or update the links in
`index.html`.
