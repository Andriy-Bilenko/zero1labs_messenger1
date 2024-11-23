
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//import "./fhevm/lib/TFHE.sol";

contract Chat {
    uint256 public value;

        // Struct to store a transaction (sending address, message string, and receiving address)
    struct Transaction {
        address sender;
        string message;
        address receiver;
    }

    // Mapping to store transactions by the receiving address
    mapping(address => Transaction[]) public inbox;

    // Function to send a message to another address
    function send(string memory message, address receiver) public {
        // Create a new transaction
        Transaction memory newTransaction = Transaction({
            sender: msg.sender,
            message: message,
            receiver: receiver
        });

        // Store the transaction in the receiver's inbox
        inbox[receiver].push(newTransaction);
    }

    // Function to retrieve the inbox for the current address
    function getInbox() public view returns (Transaction[] memory) {
        return inbox[msg.sender];  // Return the transactions for the caller
    }
}
//make a smart contract that acts as a storage of transactions (sending address, string, recieving address), and 2 functions 
//1) send(string, address)
//2) get_inbox() (gives for the current address by doing a lookup in a storage by address)
