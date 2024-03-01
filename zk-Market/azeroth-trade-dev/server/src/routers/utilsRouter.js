import express from 'express';

import { getAllTrade, getContractAddressController, getNotesController } from '../controllers/utilsController';

const utilsRouter = express.Router();

utilsRouter.get('/contractAddress', getContractAddressController);

utilsRouter.get('/getNotes/:sk_enc', getNotesController);


// ---- TEST -----

utilsRouter.get('/getAllTrades', getAllTrade)

export default utilsRouter;
