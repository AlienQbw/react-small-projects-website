import React from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const Music = () => {
  const { musicGenre } = useGlobalProductivityContext();
  return (
    <div className="productivity-module container">
      <p>
        Choose the music that you would like to be played while you are working
        on something ;)
      </p>

      {musicGenre.map((el) => {
        return <button key={el}>{el}</button>;
      })}
      <button>No music</button>
    </div>
  );
};

export default Music;
