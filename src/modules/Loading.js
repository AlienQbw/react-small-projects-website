import React from 'react';

const Loading = (text) => {
  const message = text.text;
  return (
    <div className="loader-container">
      <div className="flex">
        <p className="loader-text">{message}</p>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
