# 🇿🇦 SA-Report

Making South African public services simple, accessible, and transparent — built with zero budget and open to everyone.

SA-Report is a community-driven, open-source civic platform that helps South Africans understand and navigate government services from one place: how to replace an ID, apply for UIF, register a business, report a municipal issue, and more.

Every government fee, document requirement, and processing time is subject to change — every guide links back to the official source so you can double-check before you act.

## Running locally

```bash
npm install
npm run dev
```

Visit the local URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`, which can be hosted anywhere that serves static files.

## Deploying to GitHub Pages (free)

This repo includes `.github/workflows/deploy.yml`, which automatically builds and deploys the site to GitHub Pages on every push to `main`.

To enable it:

1. Push this repo to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the app and publishes it automatically.

The workflow sets the correct base path automatically using the repository name, so it works out of the box on a project site (`https://<username>.github.io/<repo-name>/`).

## Adding or editing a service guide

All content lives in one file: [`src/data/services.json`](./src/data/services.json). See [`/contribute`](./src/pages/Contribute.jsx) in the running app for the exact shape each entry should follow, then open a pull request.

## Tech stack (Phase 1 — Zero Budget)

| Component      | Technology        |
| -------------- | ------------------ |
| Frontend       | React + Vite        |
| Hosting        | GitHub Pages         |
| Deployment     | GitHub Actions        |
| Data           | JSON                   |
| Version Control| GitHub                  |
| Backend        | None (Phase 1)            |
| Database       | None (Phase 1)             |
| Authentication | None (Phase 1)              |

Monthly hosting cost: **R0**.

## Roadmap

- **Phase 1 — Zero Budget**: service guides, search, structured knowledge base, mobile-friendly interface, GitHub Pages deployment.
- **Phase 2 — Community Growth**: expanded knowledge base, improved search, community contributions.
- **Phase 3 — AI (Future)**: only after real-user validation — natural-language search and plain-language explanations of public service processes.

## Contributing

Whether you're a developer, designer, writer, researcher, or simply someone who wants to improve access to public information, your contribution is welcome. See the in-app [Contribute](./src/pages/Contribute.jsx) page for details.

## Disclaimer

SA-Report is an independent, open-source community project and is **not affiliated with any South African government department**. Always verify fees, requirements, and processing times with the relevant official source before relying on them.
