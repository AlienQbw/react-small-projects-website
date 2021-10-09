import React from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const Music = () => {
  const { musicGenre } = useGlobalProductivityContext();
  return (
    <div className="productivity-module container">
      <p>Music component</p>
      <ul>
        {musicGenre.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Music;
