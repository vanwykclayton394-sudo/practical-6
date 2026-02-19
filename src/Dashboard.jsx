import React from 'react';

const SimpleScreen = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f4f9'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#666',
    maxWidth: '600px',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to My App</h1>
      <p style={paragraphStyle}>
        This is a simple React screen layout. It features a bold title at the 
        top and a descriptive paragraph underneath, perfectly centered for a 
        clean user experience.
      </p>
    </div>
  );
};

export default SimpleScreen;