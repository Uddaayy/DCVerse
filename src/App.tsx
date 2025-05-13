import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AvatarGrid from './components/AvatarGrid';
import CreateAvatarButton from './components/CreateAvatarButton';
import CreateAvatarModal from './components/CreateAvatarModal';
import { Avatar } from './types';

function App() {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        setIsLoading(true);
        // Using DummyJSON to get user data
        const response = await fetch('https://dummyjson.com/users?limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch avatars');
        }
        const data = await response.json();
        
        // Transform the data to match our Avatar type
        const transformedAvatars = data.users.map((user: any) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          image: user.image,
          description: `AI-generated avatar for ${user.firstName}`,
        }));
        
        setAvatars(transformedAvatars);
      } catch (err) {
        setError('Failed to load avatars. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  const handleCreateAvatar = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <Header username="Alex" />
        
        {error && (
          <div className="my-8 p-4 bg-red-50 text-red-500 rounded-lg">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <AvatarGrid avatars={avatars} />
        )}
      </div>

      <CreateAvatarButton onClick={handleCreateAvatar} />
      
      {showModal && (
        <CreateAvatarModal onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;