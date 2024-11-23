import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { WalletConnect } from './components/WalletConnect';
import { MessageForm } from './components/MessageForm';
import { MessageInput } from './components/MessageInput';

export default function App() {
  const [wallet, setWallet] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);

  const handleWalletConnect = (address: string) => {
    setWallet(address);
    setIsConnected(true);
    setFrom(address);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message Details:', { from, to, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header with wallet connect */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            Zero1Labs Messenger
          </h1>
          <div className="w-64">
            <WalletConnect
              isConnected={isConnected}
              wallet={wallet}
              onConnect={handleWalletConnect}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex gap-6">
          {/* Left side - Message Input */}
          <div className="w-1/3">
            <MessageInput
              message={message}
              onMessageChange={setMessage}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Right side - Message Details */}
          <div className="w-2/3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-xl font-semibold text-blue-400 mb-6">Message Details</h2>
              <MessageForm
                from={from}
                to={to}
                message={message}
                onFromChange={setFrom}
                onToChange={setTo}
                onMessageChange={setMessage}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}