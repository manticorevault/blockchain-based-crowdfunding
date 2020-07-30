import Web3 from "web3";

//Access Metamask's Provider
let web3;

//Check if it's executed inside the browser and MetaMask is available
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    //Hijack's MetaMask Web3 Provider
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are not on the servevr OR the user is not running metamask
    // Connect via Infura
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/ac81fd6a6d694102aebb0c10fc7f28f3"
    );

    web3 = new Web3(provider);

}

export default web3;