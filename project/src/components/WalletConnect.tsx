import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';
import { Wallet } from 'lucide-react';

interface WalletConnectProps {
  isConnected: boolean;
  wallet: string;
  onConnect: (address: string) => void;
}

export function WalletConnect({ isConnected, wallet, onConnect }: WalletConnectProps) {
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        onConnect(accounts[0]); // This will trigger the state update in the parent component
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask to use this feature');
    }
  };

  return (
    <div>
      <button
        onClick={connectWallet}
        className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
          isConnected
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <Wallet className="w-4 h-4" />
        {isConnected ? 'Connected' : 'Connect Wallet'}
      </button>
      {isConnected && wallet && (
        <p className="mt-1 text-xs text-gray-400 text-center">
          {wallet.slice(0, 6)}...{wallet.slice(-4)}
        </p>
      )}
    </div>
  );
}

