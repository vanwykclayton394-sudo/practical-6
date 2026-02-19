import React from 'react';

const SimpleScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">
          Exploring New Horizons
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          React makes it incredibly easy to build component-based user interfaces. 
          By nesting a title and a paragraph within a flexbox container, we create 
          a clean, readable layout that adapts to any screen size. Whether you're 
          building a simple blog or a complex dashboard, starting with a clear 
          hierarchy is the key to a great user experience.
        </p>
      </div>
    </div>
  );
};

export default SimpleScreen;