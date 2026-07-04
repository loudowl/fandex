# Fandex

*Your personal prediction market portfolio for pop culture events.*

Fandex is a prediction market aggregator and personal portfolio tracker that pulls live odds from Kalshi, Polymarket, and Manifold Markets. It presents these odds through a TikTok-style vertical scroll feed organized by categories such as Sports, TV, Politics, Tech, and Entertainment. Users can build a virtual portfolio of positions they're tracking or holding, set price alerts, and receive AI-generated summaries of market movements, making prediction markets as approachable as stock watchlist apps.

## Features

- TikTok-style vertical swipe feed of live prediction markets, personalized by user-selected interest categories.
- Virtual portfolio tracker to watch hypothetical positions and track P&L.
- AI-generated market mover summaries using GPT-4o mini for plain-English explanations.
- Integration with Kalshi, Polymarket, and Manifold Markets for real-time data.

## Tech Stack

- **Frontend**
  - React Native with Expo SDK 51+
  - Victory Native for charts
  - Redux for state management
  - Expo Notifications for alerts
  - RevenueCat for monetization

- **Backend**
  - Node.js 18.x
  - Express 4.x

- **Database**
  - PostgreSQL 14.x (Neon serverless)

- **Infrastructure**
  - Railway for backend hosting
  - Vercel for frontend hosting
  - Supabase Auth for authentication

## Architecture

The Fandex architecture consists of a mobile client built with React Native, a backend API powered by Node.js and Express, and a PostgreSQL database. It integrates with external services like Kalshi, Polymarket, and Manifold Markets for live data and uses OpenAI GPT-4o mini for AI summaries.

```mermaid
flowchart TD
    client[Client (React Native)]
    api[API (Node.js/Express)]
    db[(PostgreSQL)]
    kalshi[Kalshi API]
    polymarket[Polymarket API]
    manifold[Manifold API]
    openai[OpenAI GPT-4o mini]

    client -->|requests| api
    api -->|queries| db
    api -->|fetches data| kalshi
    api -->|fetches data| polymarket
    api -->|fetches data| manifold
    api -->|AI summaries| openai
```

## Project Structure

```plaintext
.
├── docs
│   ├── PRD.md
│   ├── DESIGN.md
│   └── ARCHITECTURE.md
├── fandex-frontend
│   ├── package.json
│   ├── app.json
│   ├── App.tsx
│   ├── redux
│   │   ├── store.ts
│   │   └── slices
│   │       ├── marketSlice.ts
│   │       ├── portfolioSlice.ts
│   │       └── userSlice.ts
│   ├── screens
│   │   └── HomeScreen.tsx
│   ├── components
│   │   └── MarketCard.tsx
│   └── utils
│       ├── api.ts
│       ├── notifications.ts
│       └── styles.ts
├── fandex-backend
│   ├── package.json
│   ├── src
│   │   ├── app.ts
│   │   ├── routes
│   │   │   └── marketRoutes.ts
│   │   ├── controllers
│   │   │   └── marketController.ts
│   │   ├── services
│   │   │   └── marketService.ts
│   │   └── utils
│   │       └── db.ts
│   └── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x
- PostgreSQL 14.x
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fandex.git
   cd fandex
   ```

2. Install frontend dependencies:
   ```bash
   cd fandex-frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../fandex-backend
   npm install
   ```

### Environment Variables

Copy the `.env.example` to `.env` and fill in the necessary configuration details.

### Running

1. Start the backend server:
   ```bash
   cd fandex-backend
   npm run start
   ```

2. Start the frontend app:
   ```bash
   cd ../fandex-frontend
   expo start
   ```

## Documentation

- [Product Requirements](docs/PRD.md)
- [Design Brief](docs/DESIGN.md)
- [Architecture](docs/ARCHITECTURE.md)

## License

This project is licensed under the MIT License.