# Matthew Huynh — engineering portfolio

Static website for mattahuynh.com. Edit the HTML and CSS directly; no install or build step is required.

- `index.html`: homepage and project listings.
- `about.html`: background, interests, publication, contact placeholders.
- `resume.html`: education, PDF download, embedded resume.
- `projects/*.html`: five engineering case studies.
- `assets/css/styles.css`: shared design; colors and spacing are defined at the top.
- `assets/js/main.js`: mobile menu and current footer year.
- `assets/docs/Matthew-Huynh-Resume.pdf`: current resume, copied byte-for-byte from `assets/docs/Huynh, Matthew - Resume O1.pdf`.
- `assets/images/`: place project photos and CAD screenshots here.

## Content to supply

1. Contact links are populated from `reference/content2.txt`. Update them in page headers, footers, and About if they change.
2. Hero photo and project media: CAD views, assembly photos, schematics, simulation screenshots, calculation tables, and response plots. Replace each `.placeholder-image` block with a figure and image with descriptive alt text. Use relative paths (`assets/images/...` on top-level pages, `../assets/images/...` on project pages). Set image width to 100%, height to auto, and explicit width/height attributes to prevent layout shifts.
3. Specific design iterations and supporting evidence for each project. Only add performance figures that were measured or calculated and can be supported.
4. Dates, team sizes, and confirmed completion status where these are not yet supplied. Ornithopter remains explicitly in CAD development.
5. Add an Open Graph image URL. The supplied arXiv publication link is connected on About.
6. Confirm the supplied resume is the public version you want to use, and replace the PDF at the same path whenever updated. Education text currently follows context.txt.

## Hosting

These files belong at the GitHub Pages repository root. Relative links support hosting at mattahuynh.com. Keep the existing `CNAME` file unchanged. No external libraries or fonts are loaded.

The website has been prepared locally. Committing or pushing is a separate publishing step.

## Image crop guide

Small labels in the bottom-left corner of each placeholder show its aspect ratio and recommended source dimensions. The displayed frame scales with the browser width; these pixel sizes are export recommendations.

| Frame | Desktop crop | Mobile crop (760 px and below) |
| --- | --- | --- |
| Homepage hero | 11:10 — 1320 × 1200 px | 27:20 — 1350 × 1000 px |
| Case-study hero | 9:4 — 1800 × 800 px | 27:20 — 1350 × 1000 px |
| Project cards and process images | 4:3 — 1200 × 900 px | Same |

For hero photos, keep the subject near the center or prepare separate desktop and mobile crops. Crop labels are CSS decorations on placeholders and disappear when the placeholder is replaced with a real image.
