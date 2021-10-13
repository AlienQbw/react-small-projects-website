import React from 'react';
/*
  1. Timer - time setting
  2. Theme for the app
*/
const Settings = () => {
  return (
    <div className="productivity-module container">
      <input type="number" placeholder="Setup time interval..." />
      <button>
        Change theme
        {/*         Here will be switch with an animation that will change sun into moon if
        you flip it, and it will change theme for the app */}
      </button>
    </div>
  );
};

export default Settings;
