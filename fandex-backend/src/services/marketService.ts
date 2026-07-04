import axios from 'axios';

export const fetchKalshiMarkets = async () => {
  try {
    const response = await axios.get('https://api.kalshi.com/v1/markets');
    return response.data;
  } catch (error) {
    console.error('Error fetching Kalshi markets:', error);
    throw new Error('Error fetching Kalshi markets');
  }
};

export const fetchPolymarketMarkets = async () => {
  try {
    const response = await axios.get('https://api.polymarket.com/v1/markets');
    return response.data;
  } catch (error) {
    console.error('Error fetching Polymarket markets:', error);
    throw new Error('Error fetching Polymarket markets');
  }
};
