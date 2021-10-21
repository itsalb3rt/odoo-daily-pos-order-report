import { Router } from 'express';
import SettingsController from '../controllers/SettingsController';
import { Authorization } from '../middlewares/Authorization';

const router = Router();

router.get('/', Authorization, SettingsController.getAll);

export default router;