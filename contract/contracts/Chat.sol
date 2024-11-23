

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./fhevm/lib/TFHE.sol";

contract Chat {
    struct Transaction {
        eaddress sender;
        euint8[] message;
        eaddress receiver;
    }

    // Mapping to store transactions by the receiving address
    mapping(eaddress => Transaction[]) public inboxSender;
    mapping(eaddress => Transaction[]) public inboxReceiver;


    // Function to send a message to another address
    function send(euint8[] memory message, eaddress sender, eaddress receiver) public {
        // Create a new transaction
        Transaction memory newTransaction = Transaction({
            sender: sender,
            message: message,
            receiver: receiver
        });

        // Store the transaction in the receiver's inbox
        inboxReceiver[receiver].push(newTransaction);
        inboxSender[sender].push(newTransaction);
    }

    // Function to retrieve the inbox for the current address
    function getInboxSender(eaddress addr) public view returns (Transaction[] memory) {
        return inboxSender[addr];  // Return the transactions for the caller
    }

    function getInboxReceiver(eaddress addr) public view returns (Transaction[] memory) {
        return inboxReceiver[addr];  // Return the transactions for the caller
    }

}
//make a smart contract that acts as a storage of transactions (sending address, string, recieving address), and 2 functions 
//1) send(string, address)
//2) get_inbox() (gives for the current address by doing a lookup in a storage by address)
