# Fandex

*Your personal prediction market portfolio for pop culture events.*

Fandex is a prediction market aggregator and personal portfolio tracker that pulls live odds from Kalshi and Polymarket. It presents these odds through a TikTok-style vertical scroll feed organized by categories such as Sports, TV, Politics, Tech, and Entertainment. Users can build a virtual portfolio of positions they're tracking or holding, set price alerts, and receive AI-generated summaries of market movements, making prediction markets as approachable as stock watchlist apps.

## Features

- TikTok-style vertical swipe feed of live prediction markets, personalized by user-selected interest categories.
- Virtual portfolio tracker to watch hypothetical positions and track P&L.
- AI-generated market mover summaries using GPT-4o mini for plain-English explanations.
- Integration with Kalshi and Polymarket for real-time data.

## Tech Stack

- **Frontend**
  - React Native 0.74 with Expo SDK 51
  - `@react-navigation/native` for screen routing
  - `@reduxjs/toolkit` + React Redux for state management
  - Victory Native for charts
  - Expo Notifications for price alerts
  - RevenueCat (`react-native-purchases`) for monetization

- **Backend**
  - Node.js 20.x LTS
  - Express 4.x

- **Database**
  - PostgreSQL 16.x (Neon serverless)

- **Infrastructure**
  - Railway for backend hosting
  - Expo Application Services (EAS) for mobile builds and distribution
  - Supabase Auth for authentication

## Architecture

The Fandex architecture consists of a mobile client built with React Native, a backend API powered by Node.js and Express, and a PostgreSQL database. It integrates with Kalshi and Polymarket for live data and uses OpenAI GPT-4o mini for AI summaries.

```mermaid
flowchart TD
    client[Client (React Native / Expo)]
    api[API (Node.js/Express)]
    db[(PostgreSQL)]
    kalshi[Kalshi API v2]
    polymarket[Polymarket CLOB API]
    openai[OpenAI GPT-4o mini]

    client -->|requests| api
    api -->|queries| db
    api -->|fetches data| kalshi
    api -->|fetches data| polymarket
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
│   │   ├── HomeScreen.tsx
│   │   ├── PortfolioScreen.tsx
│   │   ├── AlertScreen.tsx
│   │   └── SettingsScreen.tsx
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
│   │   │   ├── marketRoutes.ts
│   │   │   ├── portfolioRoutes.ts
│   │   │   └── userRoutes.ts
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

- Node.js 20.x LTS
- PostgreSQL 16.x (or a [Neon](https://neon.tech) serverless database)
- Expo CLI — `npm install -g expo-cli` (or use `npx expo` without a global install)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/loudowl/fandex.git
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

Copy `.env.example` to `.env` in `fandex-backend` and fill in the values:

```bash
cp fandex-backend/.env.example fandex-backend/.env
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `KALSHI_API_KEY` | Kalshi trading API key |
| `POLYMARKET_API_KEY` | Polymarket API key |
| `OPENAI_API_KEY` | OpenAI API key for AI summaries |

### Running

1. Start the backend server:
   ```bash
   cd fandex-backend
   npm run start
   ```

2. Start the frontend app:
   ```bash
   cd fandex-frontend
   npx expo start
   ```
   
   Then press `i` for iOS simulator, `a` for Android emulator, or scan the QR code with the Expo Go app.

## Documentation

- [Product Requirements](docs/PRD.md)
- [Design Brief](docs/DESIGN.md)
- [Architecture](docs/ARCHITECTURE.md)

## License

This project is licensed under the MIT License.
