import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xD11ffa79284B30017f7a8C539a3FCFf727651296"
);

export default instance;