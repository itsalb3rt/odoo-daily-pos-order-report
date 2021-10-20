import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';
import { Authorization } from '../middlewares/Authorization';

const router = Router();

router.get('/', Authorization, OrdersController.getAll);

export default router;