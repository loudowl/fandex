import axios from 'axios';

const kalshiClient = axios.create({
  baseURL: 'https://trading-api.kalshi.com/trade-api/v2',
  headers: {
    Authorization: `Bearer ${process.env.KALSHI_API_KEY}`,
  },
});

export const fetchKalshiMarkets = async () => {
  try {
    const response = await kalshiClient.get('/markets', {
      params: { limit: 50, status: 'open' },
    });
    return response.data.markets ?? [];
  } catch (error) {
    console.error('Error fetching Kalshi markets:', error);
    throw new Error('Error fetching Kalshi markets');
  }
};

export const fetchPolymarketMarkets = async () => {
  try {
    const response = await axios.get('https://clob.polymarket.com/markets', {
      params: { limit: 50, active: true },
    });
    return response.data.data ?? [];
  } catch (error) {
    console.error('Error fetching Polymarket markets:', error);
    throw new Error('Error fetching Polymarket markets');
  }
};
