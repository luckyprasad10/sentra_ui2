# SENTRA Working Frontend

A runnable React + TypeScript frontend foundation for the SENTRA Core Execution Platform.

This is not a static screen prototype. The application includes real client-side routing, role-based permissions, persisted workspace data, state-changing workflows, validation and a production build.

## Included flows

- Stable login with clear invalid-credential errors
- Role-derived navigation; users do not select a role after login
- Role-based Home and My Work experiences
- Project-first connected lifecycle workspace
- Requirements: create, inspect traceability and change state
- Development: move stories/tasks/bugs through workflow states
- Testing: filter by suite and execute Pass / Fail / Blocked in focus mode
- Deployment: guided steps, pause/resume, approval gates and execution progress
- Approval Inbox: approve/reject governed decisions
- Knowledge Capture: submit, clarify, approve or reject improvements
- Unified activity timeline and downloadable audit CSV
- Dark/light appearance
- Responsive sidebar and layouts
- Data persisted in browser localStorage
- Resettable demo workspace

## Stack

- React
- TypeScript
- Vite
- React Router
- Zustand with localStorage persistence
- Lucide React icons
- Plain CSS design system inspired by the original SENTRA UI

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Validate and build

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Demo accounts

All accounts use password: `demo123`

| Role | Email |
|---|---|
| Product Manager | `jordan@sentra.io` |
| Developer | `aarav@sentra.io` |
| QA Engineer | `sarah@sentra.io` |
| Release Engineer | `david@sentra.io` |
| Auditor | `alex@sentra.io` |

Clicking a demo account on the login screen only fills its email. Authentication still uses the email/password form, and the role comes from the authenticated account.

## Frontend data model

The working frontend currently uses typed seed data and Zustand actions as a local data adapter. This makes the full frontend usable before backend APIs are finalized.

When the backend is connected, replace store mutations with API calls while preserving the page and component contracts. Recommended endpoints include:

- `POST /auth/login`
- `GET /me`
- `GET /projects`
- `GET /projects/:id/workspace`
- `POST /projects/:id/requirements`
- `PATCH /work-items/:id/status`
- `PATCH /test-executions/:id`
- `PATCH /deployments/:id`
- `POST /approvals/:id/decision`
- `POST /suggestions`
- `GET /audit-events`

## Hosting

`public/_redirects` supports Netlify-style SPA routing. `vercel.json` provides the equivalent Vercel rewrite. Other static hosts should rewrite unknown routes to `index.html`.
