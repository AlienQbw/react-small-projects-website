import React from 'react';
import '../modules/ProductivityAppModules/styles/styles.css';
import Timer from '../modules/ProductivityAppModules/Timer';
import Settings from '../modules/ProductivityAppModules/Settings.js';
import Music from '../modules/ProductivityAppModules/Music';
import History from '../modules/ProductivityAppModules/History';
import Tasks from '../modules/ProductivityAppModules/Tasks';

import { ProductivityProvider } from '../productivityContext';
/*
This app should contain:
            -Timer for the single activity
            -Todo list
            -Personal Settings for breaks and work
            -History for every session
            -Background music for focus
            -Categories for the tasks
*/

const ProductivityApp = () => {
  return (
    <ProductivityProvider>
      <div className="container productivityApp">
        <Timer />
        <Settings />
        {/*         <TodoList /> */}
        <Tasks />
        <Music />
        <History />
      </div>
    </ProductivityProvider>
  );
};

export default ProductivityApp;

/*

      <div>
        <p>
          1. Timer for single activity with switch to go to studying/working
          timer or break Timer
        </p>
        <p>2. Todo list</p>
        <p>3. Settings button and settings will contain:</p>
        <ul>
          <li style={{ listStyle: 'inside', marginLeft: '5px' }}>
            Timer settings
          </li>
          <li style={{ listStyle: 'inside', marginLeft: '5px' }}>
            Background music genre
          </li>
        </ul>

        <p>4. History of previous sessions</p>
        <p>5. Background music play button and volume slider</p>
        <p>
          6. SIDEBAR which will slide thanks to hamburger button, and will
          contain categories and tasks, which will have buttons to add them to
          main screed todo list
        </p>
      </div>
*/
