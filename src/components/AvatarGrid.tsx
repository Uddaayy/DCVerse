import React from 'react';
import AvatarCard from './AvatarCard';
import { Avatar } from '../types';

interface AvatarGridProps {
  avatars: Avatar[];
}

const AvatarGrid: React.FC<AvatarGridProps> = ({ avatars }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Your AI Avatars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} />
        ))}
      </div>
      {avatars.length === 0 && (
        <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            No avatars found. Create your first AI avatar!
          </p>
        </div>
      )}
    </div>
  );
};

export default AvatarGrid;