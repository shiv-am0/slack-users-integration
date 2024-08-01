import { Router } from 'express';
import { callback } from '../controllers/authController'

const router = Router();

router.post('/callback', callback);

export default router;
