import React, { useState } from 'react';
import { X, Upload, Sparkles } from 'lucide-react';

interface CreateAvatarModalProps {
  onClose: () => void;
}

const CreateAvatarModal: React.FC<CreateAvatarModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'generate'>('upload');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate AI generation
  const handleGenerate = () => {
    // In a real app, this would call an AI service
    // For demo, we'll just use a placeholder
    setTimeout(() => {
      setPreviewImage('https://dummyimage.com/400x400/8956ff/ffffff&text=AI+Avatar');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
            <Sparkles className="mr-2 text-purple-500" size={20} />
            Create New Avatar
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-5">
          <div className="flex space-x-2 mb-6">
            <button 
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-2 rounded-md transition-colors ${
                activeTab === 'upload' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              Upload Image
            </button>
            <button 
              onClick={() => setActiveTab('generate')}
              className={`flex-1 py-2 rounded-md transition-colors ${
                activeTab === 'generate' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              AI Generate
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Avatar Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter avatar name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Describe this avatar"
            />
          </div>

          {activeTab === 'upload' ? (
            <div className="mb-6">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                {previewImage ? (
                  <div className="mb-4">
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="max-h-48 max-w-full mx-auto rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <Upload className="text-gray-400" size={48} />
                  </div>
                )}
                
                <label className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer transition-colors">
                  {previewImage ? 'Change Image' : 'Upload Image'}
                  <input 
                    type="file" 
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                  />
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Supports JPG, PNG, WebP
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                {previewImage ? (
                  <div className="mb-4">
                    <img 
                      src={previewImage} 
                      alt="Generated Preview" 
                      className="max-h-48 max-w-full mx-auto rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <Sparkles className="text-purple-500" size={48} />
                  </div>
                )}
                
                <button
                  onClick={handleGenerate}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md cursor-pointer transition-colors"
                >
                  Generate with AI
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Uses your description to create a unique avatar
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
              !name || (!previewImage && activeTab === 'upload') ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!name || (!previewImage && activeTab === 'upload')}
          >
            Create Avatar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAvatarModal;