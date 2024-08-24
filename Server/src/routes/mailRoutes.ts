// mailRoutes.ts

import express from 'express';
import { sendEmail } from '../controllers/mailController';

const router = express.Router();

router.post('/send-mail', sendEmail);

export default router;