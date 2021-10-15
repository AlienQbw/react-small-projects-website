import React, { useEffect, useState, useRef } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const Timer = () => {
  const { defaultUser, updateHistory } = useGlobalProductivityContext();
  const ref = useRef(null);
  const [timer, setTimer] = useState(defaultUser.timer);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const startTimer = () => {
    setIsRunning(true);
    ref.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setIsPaused(false);
  };
  const stopTimer = () => {
    clearInterval(ref.current);
    setIsRunning(false);
    setIsPaused(true);
  };
  const resetTimer = () => {
    ref.current = null;
    setTimer(defaultUser.timer);
  };

  const ResetButton = () => {
    return (
      <button
        className="btn-timer"
        onClick={() => {
          updateHistory(timer);
          resetTimer();
        }}
      >
        Reset
      </button>
    );
  };
  /* useEffect here is called because if we change settings in settings.js for timer we have to update changes */
  useEffect(() => {
    setTimer(defaultUser.timer);
  }, [defaultUser.timer]);
  return (
    <section className="flex">
      <div className="bubble-background flex">
        <div className="bubble flex">
          <p className="time">{timer} s.</p>
          <button
            className="btn-timer"
            onClick={() => (isRunning ? null : startTimer())}
          >
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
