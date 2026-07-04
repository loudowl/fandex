# Fandex Architecture Document

## 1. Tech Stack

### Frontend
- **Framework**: React Native with Expo SDK 51+
- **UI Library**: Victory Native for charts
- **State Management**: Redux (for global state management)
- **Notifications**: Expo Notifications
- **Monetization**: RevenueCat

### Backend
- **Runtime**: Node.js 18.x
- **Framework**: Express 4.x
- **Database**: PostgreSQL 14.x (Neon serverless)
- **Authentication**: Supabase Auth
- **Hosting**: Railway for backend, Vercel for frontend

### APIs
- **Kalshi REST API**
- **Polymarket CLOB API**
- **OpenAI GPT-4o mini API**

### Other
- **Language**: TypeScript (for both frontend and backend)

## 2. Project Structure

### Frontend (React Native)

```
/fandex-frontend
│
├── /assets
│   └── /images
├── /components
│   ├── MarketCard.tsx
│   ├── MarketDetail.tsx
│   ├── Portfolio.tsx
│   ├── PriceAlert.tsx
│   └── AIExplanation.tsx
├── /screens
│   ├── HomeScreen.tsx
│   ├── PortfolioScreen.tsx
│   ├── AlertScreen.tsx
│   └── SettingsScreen.tsx
├── /redux
│   ├── /slices
│   │   ├── marketSlice.ts
│   │   ├── portfolioSlice.ts
│   │   └── userSlice.ts
│   └── store.ts
├── /utils
│   ├── api.ts
│   ├── notifications.ts
│   └── styles.ts
├── App.tsx
└── app.json
```

### Backend (Node.js/Express)

```
/fandex-backend
│
├── /controllers
│   ├── marketController.ts
│   ├── portfolioController.ts
│   └── userController.ts
├── /models
│   ├── Market.ts
│   ├── Portfolio.ts
│   ├── User.ts
│   └── Alert.ts
├── /routes
│   ├── marketRoutes.ts
│   ├── portfolioRoutes.ts
│   └── userRoutes.ts
├── /services
│   ├── kalshiService.ts
│   ├── polymarketService.ts
│   ├── openAIService.ts
│   └── alertService.ts
├── /utils
│   ├── auth.ts
│   ├── db.ts
│   └── errorHandler.ts
├── app.ts
└── package.json
```

## 3. API Design

### Market Endpoints

- **GET /api/markets**
  - **Description**: Fetches trending markets
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "title": "string",
        "category": "string",
        "yesProbability": "number",
        "volume": "number",
        "probabilityChange": "number"
      }
    ]
    ```

- **GET /api/markets/:marketId**
  - **Description**: Fetches market details
  - **Response**:
    ```json
    {
      "id": "string",
      "title": "string",
      "yesProbability": "number",
      "volume": "number",
      "AIExplanation": "string"
    }
    ```

### Portfolio Endpoints

- **POST /api/portfolio**
  - **Description**: Add market to user portfolio
  - **Request**:
    ```json
    {
      "userId": "string",
      "marketId": "string",
      "entryPrice": "number"
    }
    ```
  - **Response**: `201 Created`

- **GET /api/portfolio/:userId**
  - **Description**: Fetches user's portfolio
  - **Response**:
    ```json
    [
      {
        "marketId": "string",
        "entryPrice": "number",
        "currentPrice": "number",
        "pnl": "number"
      }
    ]
    ```

### Alert Endpoints

- **POST /api/alerts**
  - **Description**: Create a price alert
  - **Request**:
    ```json
    {
      "userId": "string",
      "marketId": "string",
      "threshold": "number"
    }
    ```
  - **Response**: `201 Created`

## 4. Data Models

### User Table

```sql
CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Market Table

```sql
CREATE TABLE Markets (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  category VARCHAR(50),
  yes_probability FLOAT,
  volume BIGINT,
  probability_change FLOAT
);
```

### Portfolio Table

```sql
CREATE TABLE Portfolios (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(id),
  market_id INT REFERENCES Markets(id),
  entry_price FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Alert Table

```sql
CREATE TABLE Alerts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(id),
  market_id INT REFERENCES Markets(id),
  threshold FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 5. Authentication

- **Approach**: Supabase Auth for email/password authentication.
- **Flow**:
  1. User signs up or logs in via the app.
  2. Supabase handles authentication and returns a JWT.
  3. The frontend stores the JWT and sends it with each request for authenticated endpoints.

## 6. State Management

- **Global State**: Managed with Redux.
- **Slices**:
  - `marketSlice`: For storing market data and updates.
  - `portfolioSlice`: For managing user portfolios.
  - `userSlice`: For handling user authentication state and preferences.

## 7. Key Dependencies

- **Frontend**:
  - `react-native`: Core library for building the app.
  - `expo`: For handling app deployment and testing.
  - `redux`: For state management.
  - `react-redux`: For connecting React components to Redux store.
  - `victory-native`: For rendering charts.
  - `expo-notifications`: For handling push notifications.

- **Backend**:
  - `express`: Web framework for building REST APIs.
  - `pg`: PostgreSQL client for Node.js.
  - `axios`: For making HTTP requests to third-party APIs.
  - `jsonwebtoken`: For handling JWT authentication.
  - `dotenv`: For managing environment variables securely.

## 8. Deployment

### Hosting
- **Frontend**: Deploy on Vercel for seamless integration with React Native and Expo.
- **Backend**: Deploy on Railway for easy scaling and integration with PostgreSQL.

### CI/CD
- **Frontend**: Use GitHub Actions to automate build and deployment to Vercel.
- **Backend**: Use GitHub Actions for testing and deploying to Railway on push to the main branch.

### Monitoring
- Use Sentry for error tracking and performance monitoring across both frontend and backend.

This architecture provides a robust foundation for Fandex, ensuring scalability, security, and a smooth user experience.