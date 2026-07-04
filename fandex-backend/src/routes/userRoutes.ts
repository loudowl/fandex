import { Router } from 'express';

const router = Router();

router.get('/me', (_req, res) => {
  res.json({ user: null });
});

export default router;
