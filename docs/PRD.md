# Product Requirements Document (PRD): Fandex

## 1. Executive Summary
Fandex is a mobile application designed to make prediction markets accessible and engaging for mainstream audiences by presenting them as entertainment-focused experiences. It aggregates live odds from Kalshi, Polymarket, and Manifold Markets, displaying them in a TikTok-style feed. Users can build virtual portfolios, set price alerts, and receive AI-generated summaries of market movements. Targeting casual users interested in pop culture, Fandex aims to demystify prediction markets and drive engagement through a freemium model.

## 2. Goals & Success Metrics
- **User Engagement**: Achieve 5,000 active users within the first 3 months.
- **Monetization**: Convert at least 10% of active users to the 'Fandex Pro' subscription within 6 months, generating ~$3,500 MRR.
- **User Retention**: Achieve a 30-day retention rate of 40% or higher.
- **Market Coverage**: Ensure seamless integration and real-time updates from Kalshi, Polymarket, and Manifold Markets.

## 3. User Personas
- **Casual Enthusiast**: Aged 18-34, interested in pop culture and current events, seeks entertainment and engagement through prediction markets.
- **Data-Driven Analyst**: Aged 25-45, enjoys analyzing trends and making informed predictions, values detailed insights and data-driven summaries.
- **Trend Follower**: Aged 16-30, active on social media, enjoys following trends and engaging with content presented in an entertaining format.

## 4. Core Features
### P0 (Must-Have)
- **Vertical Swipe Feed**: Real-time prediction market feed organized by user-selected categories.
- **Virtual Portfolio Tracker**: Track positions and hypothetical P&L without real money involvement.
- **AI Market Mover Summaries**: GPT-4o mini-generated explanations for significant market movements.
- **Price Alert Notifications**: Push notifications for user-defined probability thresholds.

### P1 (Should-Have)
- **User Onboarding**: Interest-based category selection at initial setup.
- **Dark Mode**: Default theme for better user experience and modern aesthetic.
- **Account Management**: Email/password authentication using Supabase Auth.

### P2 (Nice-to-Have)
- **Weekly Market Digest**: AI-generated email summarizing top market movements for Pro users.
- **Social Sharing**: Ability to share interesting market cards on social media platforms.

## 5. User Stories
- **As a Casual Enthusiast**, I want to swipe through a feed of prediction markets so that I can discover interesting trends in pop culture.
- **As a Data-Driven Analyst**, I want to track my virtual portfolio's performance so that I can analyze my prediction accuracy and improve over time.
- **As a Trend Follower**, I want to receive notifications when a market hits a specific threshold so that I can stay updated on trending topics.

## 6. Out of Scope
- Real-money transactions or betting functionalities.
- Desktop or web application versions.
- Integration with additional prediction market platforms beyond Kalshi, Polymarket, and Manifold Markets.
- Advanced data analytics or complex charting tools beyond basic probability changes.

## 7. Technical Constraints
- Must use React Native and Expo for cross-platform compatibility.
- Backend must be built with Node.js/Express and deployed on Railway.
- PostgreSQL database required for storing user data and caching AI summaries.
- Compliance with third-party API usage policies (Kalshi, Polymarket, OpenAI).

## 8. Timeline Estimate
### Phase 1: Planning & Design (1-2 weeks)
- Finalize design mockups and user flow diagrams.
- Solidify API integration plans and backend architecture.

### Phase 2: Development (3-4 weeks)
- Implement core features: feed, portfolio tracker, AI summaries.
- Develop backend services and database schema.

### Phase 3: Testing & Iteration (1-2 weeks)
- Conduct user testing and gather feedback.
- Fix bugs and make necessary adjustments based on user feedback.

### Phase 4: Launch & Marketing (1 week)
- Prepare marketing materials and launch campaign.
- Deploy application to iOS and Android app stores.