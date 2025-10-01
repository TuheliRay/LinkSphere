// src/components/layout/Header.js
import React from 'react';
import { UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900">Chat App</h1>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;