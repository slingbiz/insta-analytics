# Instagram Analytics Clone

Pixel-perfect clone of Instagram (Xfer) Analytics built with React, TypeScript, Tailwind CSS, and Vite.

## Architecture

- **`/`** — Analytics UI (mobile phone frame, pixel-perfect match to screenshots)
- **`/dashboard`** — Admin panel to control all numbers, images, posts, stories, and reels
- **Zustand store** — Shared state with localStorage persistence; dashboard changes reflect instantly in analytics

## Development

```bash
npm install
npm run dev
```

## Workflow

1. Share screenshots of each analytics screen (starting with the main Insights page)
2. We rebuild each screen pixel-perfect against the reference
3. Wire each screen to the dashboard store so all numbers and images are editable

## Icons

If an exact icon cannot be matched from open-source libraries, we will flag it so you can provide the asset.
