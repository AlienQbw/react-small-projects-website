import React, { useState, useEffect, useRef } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';
import lofi from './media/music/lofi-sample.mp3';
import rock from './media/music/rock-sample.mp3';
import instrumental from './media/music/instrumental-sample.mp3';
import pop from './media/music/pop-sample.mp3';
/* I'm importing in such a very inefficient way because I have only 4 songs */

const useAudio = (url) => {
  const songs = [lofi, rock, instrumental, pop];

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const volume = useRef(1);
  const [currentVolume, setCurrentVolume] = useState(1);

  const toggle = () => {
    setPlaying(!playing);
  };
  const changeVolume = () => {
    audio.volume = volume.current.value;
    setCurrentVolume(audio.volume);
  };

  const changeSong = (e) => {
    setPlaying(true);
    songs.forEach((song) => {
      if (song.includes(e)) {
        audio.src = song;
      }
    });
    audio.pause();
    audio.load();
    audio.play();
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle, volume, changeVolume, currentVolume, changeSong];
};

const Music = () => {
  const { musicGenre } = useGlobalProductivityContext();
  let url = lofi;

  const [playing, toggle, volume, changeVolume, currentVolume, changeSong] =
    useAudio(url);
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
              onClick={() => {
                url = pop;
                changeSong(el.toLowerCase());
              }}
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
          onChange={changeVolume}
          ref={volume}
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.02"
        />
        <label>{`${Math.round(currentVolume * 100)}%`}</label>
      </div>
    </div>
  );
};

export default Music;
