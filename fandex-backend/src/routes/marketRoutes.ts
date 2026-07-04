import { Router } from 'express';
import { getMarkets } from '../controllers/marketController';

const router = Router();

router.get('/', getMarkets);

export default router;
