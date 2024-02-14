import express from 'express';

import acceptTradeController from '../controllers/acceptTradeController';
import { uploadController, uploadMiddleware } from '../controllers/imageUplodaController';
import registDataController from '../controllers/registDataController';

const dataRouter = express.Router();

dataRouter.post('/register', uploadMiddleware.single('image'), registDataController)

dataRouter.post('/uploadImg', uploadMiddleware.single('image'), uploadController)

dataRouter.post('/acceptTrade', acceptTradeController);

export default dataRouter;