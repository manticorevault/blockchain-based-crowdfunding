// Import and set the basic modules

const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Find and delete the "build" folder, if it exists.

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Find and read the Campaign.sol file from the contracts folder

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8");

// Compile both contracts with the Solidity Compiler

const output = solc.compile(source, 1).contracts;

// Create the "build" directory and write the output into it

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(":", "") + ".json"), 
        output[contract]
    );
}