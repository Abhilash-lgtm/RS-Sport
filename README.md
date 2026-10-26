# RA Sports — Official Website & Full-Stack Platform

Modern, full-stack athletic coaching platform for kids, schools, and track & field academies.

---

## 🚀 Live Development Server (Frontend + Backend)

To launch both the **Frontend** (Vite + React) and **Backend** (Express API) live servers concurrently with hot-reloading:

```bash
npm run dev
```

This single command starts:
- 🌐 **Frontend Live Server (Vite HMR):** [`http://localhost:5173`](http://localhost:5173)
- ⚙️ **Backend API Server (Node/Express with tsx watch):** [`http://localhost:5000`](http://localhost:5000)

Requests to `/api/*` on the frontend are automatically proxied to the backend via Vite proxy configuration in [`vite.config.ts`](./vite.config.ts).

---

## 🛠️ Individual Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Runs both Frontend and Backend concurrently with hot-reload |
| `npm run dev:client` | Runs only the Vite frontend dev server on port 5173 |
| `npm run dev:server` | Runs only the Express backend server with file watch on port 5000 |
| `npm run build` | Builds TypeScript and Vite production bundle to `dist/` |
| `npm run start` | Starts the production server (serves API and compiled frontend) |
| `npm run lint` | Runs Oxlint linter across files |

---

## 📡 Backend API Endpoints

The Express server (`server/index.ts`) provides the following REST API endpoints:

- **Health Check:** `GET /api/health`
- **Trial Bookings:**
  - `GET /api/trials` — List all registered trial bookings
  - `POST /api/trials` — Register a child for a 60-min diagnostic trial (auto-generates pass ID and saves record)
- **School Demonstrations:**
  - `GET /api/school-demos` — List school demo inquiries
  - `POST /api/school-demos` — Submit an in-school PE / Fit Cubs curriculum demo request
- **AI Coach Advisor:**
  - `POST /api/coach/chat` — AI sports assistant answering pediatric sports nutrition, footwear, drills, and training queries
- **Athlete Assessment:**
  - `POST /api/assessments/evaluate` — Evaluates athletic metrics and generates radar scores & recommended pathway

---

## 📁 Project Structure

```
RA Sports/
├── public/                 # Static assets
├── server/                 # Express backend API
│   ├── index.ts            # Server entrypoint & proxy setup
│   ├── routes/             # API route handlers
│   │   ├── trials.ts       # Booking endpoints
│   │   ├── schoolDemos.ts  # School inquiry endpoints
│   │   ├── coach.ts        # AI Coach assistant endpoint
│   │   └── assessments.ts  # Athletic assessment engine
│   └── data/               # Persistent JSON storage
├── src/                    # React 19 + TypeScript frontend
│   ├── components/         # UI sections, modals & navigation
│   │   ├── AILab/          # AI Athlete Assessment & Coach
│   │   ├── TrialBookingModal.tsx
│   │   └── SchoolDemoModal.tsx
│   ├── data/               # Sports & academy metadata
│   └── types/              # Shared TypeScript definitions
├── package.json            # Scripts & dependencies
└── vite.config.ts          # Vite build & proxy config
```

