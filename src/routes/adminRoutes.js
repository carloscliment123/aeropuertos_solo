import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { authorizeAdmin } from '../middleware/authorizeAdmin.js';
import { listUserLogs } from '../controllers/adminController.js';

const router = Router();
router.use(authenticate);
router.use(authorizeAdmin);

router.get('/users/:userId/logs', listUserLogs);
export default router