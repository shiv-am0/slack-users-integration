import { Router } from 'express';
import { getChannels, sendToChannel } from '../controllers/slackController';
import { authenticateJwt } from '../middlewares/authMiddleware';

const router = Router();

// Handle "/slack/..." routed here.
router.get('/channels', authenticateJwt, getChannels);
router.post('/send', authenticateJwt, sendToChannel);

export default router;