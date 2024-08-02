import { Router } from 'express';
import { getChannels, sendToChannel } from '../controllers/slackController';

const router = Router();

router.get('/channels', getChannels);
router.post('/send', sendToChannel);

export default router;