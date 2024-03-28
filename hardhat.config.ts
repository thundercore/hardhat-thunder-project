import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "tt-hardhat";
//import * as dotenv from "dotenv";
//dotenv.config();

const config: HardhatUserConfig = {
   //solidity: { compilers: [ { version: "0.8.25" } ] },
   solidity: { version: "0.8.25" },
   networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 141438723,
    },
   "thunder-testnet0": {
      gasPrice: "auto",
      url: "https://testnet-rpc.thundercore.com",
      chainId: 18,
      accounts: [process.env.KEY],
  },
  }
};

export default config;
