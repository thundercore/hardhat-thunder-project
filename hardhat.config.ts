import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "tt-hardhat";

const config: HardhatUserConfig = {
   solidity: { version: "0.8.25" },
   networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 141438723,
    },
  }
};

export default config;
