import Config from "../config";
import contractKeys from '../contractKeys';
import tradeContract from "./contract";

const trade = new tradeContract(
    Config.testProvider,
    contractKeys.CONTRACT_ADDRESS
);

export default {tradeContract: trade}
