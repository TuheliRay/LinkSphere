// src/App.js
import React from 'react';
import {  SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import Header from './components/layout/Header';
import ChatPage from './components/pages/ChatPage';



function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <SignedIn>
          <Header />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <ChatPage />
          </main>
        </SignedIn>

        <SignedOut>
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8">
              <SignIn />
            </div>
          </div>
        </SignedOut>
      </div>
  );
}

export default App;