import express from 'express';
import { getContentListController, getDataController } from '../controllers/contentRouterController';

const contentRouter = express.Router();

// contentRouter.post('/publish',)
contentRouter.get('/list/:addr', getContentListController)

contentRouter.get('/list', getContentListController)

// contentRouter.get('/list/:sk_enc', getContentListController)


contentRouter.get('/getData/:h_k/:pk_enc', getDataController)

export default contentRouter;