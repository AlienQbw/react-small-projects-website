import React, { useState, useEffect, useRef } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';
import lofi from './media/music/lofi-sample.mp3';
import rock from './media/music/rock-sample.mp3';
import instrumental from './media/music/instrumental-sample.mp3';
import pop from './media/music/pop-sample.mp3';
/* I'm importing in such a very inefficient way because I have only 4 songs */

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const volume = useRef(1);

  const toggle = () => {
    setPlaying(!playing);
  };
  const changeVolume = () => {
    audio.volume = volume.current.value;
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, volume, changeVolume];
};

const Music = () => {
  const { musicGenre } = useGlobalProductivityContext();
  const url = lofi;

  const [playing, toggle, volume, changeVolume] = useAudio(url);
  return (
    <div className="productivity-container music-container">
      <p>
        Choose the music that you would like to be played while you are working
        on something ;)
      </p>
      <div className="music-options-container flex">
        {musicGenre.map((el) => {
          return (
            <button
              className="btn-productivity"
              key={el}
              onClick={() => console.log(`change song!`)}
            >
              {el}
            </button>
          );
        })}
        <div className="player-button">
          <button
            className={playing ? 'btn-pause' : 'btn-play'}
            onClick={toggle}
          ></button>
        </div>
        <input
          onClick={changeVolume}
          ref={volume}
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.02"
        />
        <label>100%</label>
      </div>
    </div>
  );
};

export default Music;
