import express from 'express';
import ordersRoutes from '../routes/Orders';
import settingsRoutes from '../routes/Settings';
// Initialization
let router = express.Router();

// Routes
router.use('/orders', ordersRoutes);
router.use('/settings', settingsRoutes);

export default router;