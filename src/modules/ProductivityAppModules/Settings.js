import React, { useRef, useState } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';
/*
  1. Timer - time setting
  2. Theme for the app
*/
const Settings = () => {
  const { defaultUser, changeTimer } = useGlobalProductivityContext();

  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    let v = inputRef.current.value;
    changeTimer(v);
    e.preventDefault();
  };

  const changeTheme = (d) => {
    if (!d) {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    } else {
      document.body.classList.remove('dark-mode');
      setDarkMode(false);
    }
  };

  return (
    <div>
      <div className="flex producitivty-container">
        <p style={{ margin: '0', fontSize: '20px' }}>Change Timer:</p>
      </div>
      <div className="flex productivity-container settings-container">
        <form className="flex">
          <input
            type="number"
            placeholder={defaultUser.timer}
            className="input-timer"
            ref={inputRef}
          />
          <input
            type="submit"
            value="Change"
            className="btn-productivity"
            onClick={handleSubmit}
          />
        </form>
        <div className="context">
          <input
            type="checkbox"
            id="toggle"
            onClick={() => {
              changeTheme(darkMode);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
