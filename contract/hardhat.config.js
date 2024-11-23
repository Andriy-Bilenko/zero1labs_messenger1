require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27", // Or the version you're using
    settings: {
      evmVersion: "cancun", // Set EVM version to Cancun
    },
  },
};

