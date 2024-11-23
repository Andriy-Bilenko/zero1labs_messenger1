import React from 'react';
import { Send } from 'lucide-react';

interface MessageFormProps {
  from: string;
  to: string;
  message: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function MessageForm({
  from,
  to,
  message,
  onFromChange,
  onToChange,
  onMessageChange,
  onSubmit
}: MessageFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">From</label>
        <input
          type="text"
          value={from}
          onChange={(e) => onFromChange(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
          placeholder="Sender's address"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">To</label>
        <input
          type="text"
          value={to}
          onChange={(e) => onToChange(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
          placeholder="Recipient's address"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 h-32 resize-none"
          placeholder="Type your message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}