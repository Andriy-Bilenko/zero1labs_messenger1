
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const TransactionStorage = await ethers.getContractFactory("Chat");

  // Deploy the contract
  const contract = await TransactionStorage.deploy();
  console.log("Contract deployed to:", contract.address);

  // Send a transaction from one address to another
  const [sender, receiver] = await ethers.getSigners();
  const tx = await contract.connect(sender).send("Hello from sender", receiver.address);
  await tx.wait();
  console.log("Message sent!");

  // Retrieve the inbox of the receiver
  const inbox = await contract.connect(receiver).getInbox();
  console.log("Receiver's inbox:", inbox);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
