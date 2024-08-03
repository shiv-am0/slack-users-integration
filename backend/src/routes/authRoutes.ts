import { Router } from 'express';
import { callback } from '../controllers/authController'

const router = Router();

// Handle "/auth/..." routes here.
router.post('/callback', callback);

export default router;
