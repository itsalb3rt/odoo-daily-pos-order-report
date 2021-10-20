import express from 'express';
import ordersRoutes from '../routes/Orders';
// import userRoutes from '../routes/User';
// import TaskRoutes from '../routes/Task';
// Initialization
let router = express.Router();

// Routes
// router.use('/users', userRoutes);
// router.use('/tasks', TaskRoutes);
router.use('/orders', ordersRoutes);

export default router;