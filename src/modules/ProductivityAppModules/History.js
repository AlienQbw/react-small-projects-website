import React, { useEffect, useState } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const History = () => {
  const { defaultUser } = useGlobalProductivityContext();
  const [history, setHistory] = useState([]);
  const [historyDisplayed, setHistoryDisplayed] = useState(false);

  const displayHistory = () => {
    if (history.length > 0) {
      setHistoryDisplayed(!historyDisplayed);
    } else {
      console.log(`no history`);
      return null;
    }
  };

  useEffect(() => {
    setHistory(...history, defaultUser.history);
  }, [defaultUser.History]);

  return (
    <div className="productivity-container flex history-container">
      <button className="btn-productivity" onClick={displayHistory}>
        Show me history
      </button>
      <ul className={historyDisplayed ? 'show' : 'hide'}>
        {history.map((el, id) => {
          return (
            <li key={id}>
              {id + 1}. {el} seconds
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
