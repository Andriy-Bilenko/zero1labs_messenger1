const { ethers } = require("hardhat");
const { createInstance } = require("fhevmjs");

//import fhevmjs from "fhevmjs";
function readConfig() {
    const configPath = path.resolve(__dirname, "config.json"); // Adjust path as necessary
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    return config;
}

async function main() {
  // Get the contract factory
  const TransactionStorage = await ethers.getContractFactory("Chat");

  // Deploy the contract
  const contract = await TransactionStorage.deploy();
  console.log("Contract deployed to:", contract.address);

  // Send a transaction from one address to another
  const [sender, receiver] = await ethers.getSigners();

  //////////////////////
  const config = readConfig();

  if (!config.POOL_ADDRESS) {
    console.error("POOL_ADDRESS not found in config.");
    process.exit(1);
  }

  const signers = await ethers.getSigners();
  const encryptedPool = await EncryptedPool__factory.connect(config.POOL_ADDRESS, sender);

  const inputString = "hello world"; // String to send
  const encodedMessage = ethers.utils.toUtf8Bytes(inputString); // Convert to bytes
  if (encodedMessage.length > 256) {
    throw new Error("Message exceeds 256 bytes");
  }

  // Pad to 256 bytes if necessary
  const paddedMessage = ethers.utils.hexZeroPad(ethers.utils.hexlify(encodedMessage), 256);

  const instance = await createInstance({
    networkUrl: process.env.NETWORK_URL || "",
    gatewayUrl: process.env.GATEWAY_URL || "",
  });

  const input = await instance.createEncryptedInput(config.POOL_ADDRESS, sender); // here we should modify it so that it encrypts not only for one user but for 2
  await input.add256(paddedMessage).addAddress(sender).addAddress(receiver);
  a
  const inputs = await input.encrypt();



  //console.log(`Creating order [BUY]... \nencrypted amount: ${inputs.handles[0]} \nenrypted price: ${inputs.handles[1]} \noriginal amount: ${amount} \noriginal price: ${price}`);

  const tx = await encryptedPool.createOrder(
    inputs.handles[0],
    inputs.handles[1],
    inputs.handles[2],
    inputs.inputProof
  );
  ///////////////
  //const tx = await contract.connect(sender).send("Hello from sender", receiver.address);
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
