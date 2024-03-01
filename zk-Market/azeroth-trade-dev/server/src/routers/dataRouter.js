import express from 'express';

import acceptTradeController from '../controllers/acceptTradeController';
import registDataController from '../controllers/registDataController';

const dataRouter = express.Router();

dataRouter.post('/register',  registDataController)

dataRouter.post('/acceptTrade', acceptTradeController);

export default dataRouter;