// src/components/chat/MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, onTypingStart, onTypingStop }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    onSendMessage(newMessage);
    setNewMessage('');
  };

  const handleTyping = () => {
    onTypingStart();
    
    if (window.typingTimeout) {
      clearTimeout(window.typingTimeout);
    }
    
    window.typingTimeout = setTimeout(() => {
      onTypingStop();
    }, 1000);
  };

  return (
    <div className="bg-white border-t border-gray-200 p-6">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
              handleTyping();
            }}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;