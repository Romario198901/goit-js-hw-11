# Pixabay Image Gallery

A simple image search gallery built with Vite, Axios, and the Pixabay API.

## Features

- Search for images by keywords using the Pixabay API
- Display image cards with likes, views, comments, and downloads
- Open full-size images in a lightbox using SimpleLightbox
- Show toast notifications for errors and empty results with iziToast
- Loader indicator while requests are in progress

## Project structure

- `src/index.html` — main page layout
- `src/main.js` — app entry point and form handling
- `src/js/pixabay-api.js` — Axios wrapper for Pixabay requests
- `src/js/render-functions.js` — gallery rendering and UI helpers
- `src/css/styles.css` — main stylesheet

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser:
   ```text
   http://localhost:5173
   ```

## Usage

1. Enter a search term in the input field.
2. Click **Search**.
3. Browse the returned image gallery.
4. Click any image to view it in the lightbox.

## Build

Create a production build with:

```bash
npm run build
```

The current build command is configured with the base path set for GitHub Pages:

```json
"build": "vite build --base=/goit-js-hw-11/",
```

If you deploy to a different repository name, update the `--base` value accordingly.

## Notes

- The app uses a Pixabay API key stored directly in `src/js/pixabay-api.js`.
- For production apps, consider moving API keys to environment variables or a secure backend.

## Dependencies

- `vite`
- `axios`
- `izitoast`
- `simplelightbox`
- `vite-plugin-full-reload`
- `vite-plugin-html-inject`

