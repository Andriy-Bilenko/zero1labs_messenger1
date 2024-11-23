
const { ethers } = require("hardhat");

async function main() {
  // Compile and deploy the contract
  const ContractFactory = await ethers.getContractFactory("MyContract");
  const myContract = await ContractFactory.deploy();

  // Wait for the contract deployment to complete
  await myContract.waitForDeployment();

  // Get the deployed contract address
  console.log("Contract deployed to:", await myContract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

