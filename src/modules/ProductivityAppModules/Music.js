import React from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const Music = () => {
  const { musicGenre } = useGlobalProductivityContext();
  return (
    <div className="productivity-container music-container">
      <p>
        Choose the music that you would like to be played while you are working
        on something ;)
      </p>
      <div className="music-options-container flex">
        {musicGenre.map((el) => {
          return (
            <button className="btn-productivity" key={el}>
              {el}
            </button>
          );
        })}
        <button className="btn-productivity">No music</button>
      </div>
    </div>
  );
};

export default Music;
