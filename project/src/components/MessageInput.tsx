import React, { useState } from 'react';

interface MessageInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function MessageInput({ message, onMessageChange, onSubmit }: MessageInputProps) {
  const [messages, setMessages] = useState([
    { id: 1, user: 'User 1', text: 'Hello! How are you?' },
    { id: 2, user: 'User 2', text: 'Can you send me the details for the meeting?' },
    { id: 3, user: 'User 3', text: 'Got the update, thanks!' },
  ]);

  // Simulate message refresh (this would typically fetch new data from a server)
  const refreshMessages = () => {
    // Here, we'll just add a new message to simulate the refresh
    setMessages([
      ...messages,
      { id: messages.length + 1, user: `User ${messages.length + 1}`, text: 'New message received!' },
    ]);
  };

  // Remove message from inbox when clicked
  const handleMessageClick = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="flex w-full h-screen">
      {/* Inbox on the left */}
      <div className="w-1/3 bg-gray-800 text-white p-4 space-y-4 overflow-y-auto rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Inbox</h2>
          <button
            onClick={refreshMessages}
            className="text-gray-400 hover:text-white p-2 border border-gray-600 rounded"
          >
            Refresh
          </button>
        </div>
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600"
              onClick={() => handleMessageClick(message.id)} // Handle click to remove message
            >
              <p>{`${message.user}: "${message.text}"`}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Message input form on the right */}
      <div className="w-2/3 p-4">
        {/* No input field here */}
      </div>
    </div>
  );
}

