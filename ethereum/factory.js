import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x3736Eb5d164b98C323428b3997D2635c342eF861"
);

export default instance;