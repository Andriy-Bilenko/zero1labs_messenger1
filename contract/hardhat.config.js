require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27", // Or the version you're using
    settings: {
      evmVersion: "cancun", // Set EVM version to Cancun
    },
    networks: {
      hardhat: {
        sepolia: {
          url: "https://testnet-rpc.cypher.z1labs.ai",
          accounts: ["9b39fb2b20986d346c0afd2569e22c3b20a601500a174dddeb89876d47c8dc2b"]
        },
      },
      zama: getChainConfig("zama"),
      tmp: getChainConfig("tmp"),
      localDev: getChainConfig("local"),
      local: getChainConfig("local"),
      localNetwork1: getChainConfig("localNetwork1"),
      multipleValidatorTestnet: getChainConfig("multipleValidatorTestnet"),

    },
  },
};

