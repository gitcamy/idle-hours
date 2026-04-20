# Idle Hours

A boutique-style storefront built with React and Vite.

## Tech Stack

- React 18
- Vite 5
- Plain CSS

## Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm (comes with Node.js)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - starts Vite in development mode with hot reload
- `npm run build` - creates a production build in `dist/`
- `npm run preview` - serves the built app locally for production preview

## Deploy Locally (Production Build)

Use this when you want to run the app locally as if it were deployed:

1. Build the app:

```bash
npm run build
```

2. Serve the production build locally:

```bash
npm run preview
```

3. Open the preview URL shown in terminal (usually `http://localhost:4173`).

## Project Structure

```text
.
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level views
│   ├── data/          # Product data
│   ├── App.jsx        # Main app state and page switching
│   └── main.jsx       # React entry point
├── index.html
└── vite.config.js
```

## Notes

- This app currently uses client-side state only (no backend/API).
- Page state is persisted in `localStorage` (`ih-page` key).
