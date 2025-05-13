import React, { useState } from 'react';
import { Edit, Trash, Download } from 'lucide-react';
import { Avatar } from '../types';

interface AvatarCardProps {
  avatar: Avatar;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ avatar }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <img 
            src={avatar.image} 
            alt={`${avatar.name} avatar`} 
            className={`object-cover w-full h-full transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 transition-opacity duration-300">
            <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-200">
              <Edit size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-200">
              <Trash size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-200">
              <Download size={20} />
            </button>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">{avatar.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{avatar.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Ready to use</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 text-sm rounded-md transition-colors duration-300">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;