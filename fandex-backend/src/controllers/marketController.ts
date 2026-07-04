import { Request, Response } from 'express';
import { fetchKalshiMarkets, fetchPolymarketMarkets } from '../services/marketService';

export const getMarkets = async (req: Request, res: Response) => {
  try {
    const kalshiMarkets = await fetchKalshiMarkets();
    const polymarketMarkets = await fetchPolymarketMarkets();
    const markets = [...kalshiMarkets, ...polymarketMarkets];
    res.json(markets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch markets' });
  }
};
