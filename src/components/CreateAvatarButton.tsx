import React from 'react';
import { Plus } from 'lucide-react';

interface CreateAvatarButtonProps {
  onClick: () => void;
}

const CreateAvatarButton: React.FC<CreateAvatarButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 z-10 flex items-center justify-center h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      aria-label="Create new avatar"
    >
      <Plus size={24} className="text-white" />
      <span className="absolute -top-12 right-0 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
        Create New Avatar
      </span>
    </button>
  );
};

export default CreateAvatarButton;