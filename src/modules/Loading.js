import React from 'react';

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="flex">
        <p className="loader-text">Loading image, it might take some time.</p>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
