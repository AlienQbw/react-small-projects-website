import React, { useEffect, useState, useRef } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const Timer = () => {
  const { defaultUser } = useGlobalProductivityContext();
  const ref = useRef(null);
  const [timer, setTimer] = useState(defaultUser.timer);
  const [isPaused, setIsPaused] = useState(false);
  const startTimer = () => {
    ref.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setIsPaused(false);
  };
  const stopTimer = () => {
    clearInterval(ref.current);
    setIsPaused(true);
  };
  const resetTimer = () => {
    ref.current = null;
    setTimer(defaultUser.timer);
  };

  const ResetButton = () => {
    return (
      <button className="btn-timer" onClick={resetTimer}>
        Reset
      </button>
    );
  };

  return (
    <section className="flex">
      <div className="bubble-background flex">
        <div className="bubble flex">
          <p className="time">{timer}</p>
          <button className="btn-timer" onClick={startTimer}>
            Start
          </button>
          {isPaused ? (
            <ResetButton />
          ) : (
            <button className="btn-timer" onClick={stopTimer}>
              Stop
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timer;
