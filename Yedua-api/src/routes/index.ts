import { Router } from 'express';
import ScrapRouter from './scrap';

// Init router and path
const router = Router();

router.use('/scrap', ScrapRouter);

export default router;
