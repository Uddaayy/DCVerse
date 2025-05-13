import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  // Get the current time to customize greeting
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <header className="mb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            AI Avatar Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 flex items-center">
            {greeting}, <span className="font-semibold ml-1">{username}</span>
            <Sparkles className="ml-2 text-purple-500" size={20} />
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
            Profile
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
            Settings
          </button>
        </div>
      </div>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded mt-4"></div>
    </header>
  );
};

export default Header;