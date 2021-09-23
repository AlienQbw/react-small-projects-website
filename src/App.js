import React from 'react';
import About from './sites/About';
import Home from './sites/Home';
import Fun from './sites/Dog';
import SzczecinWeather from './sites/SzczecinWeather';
import Navbar from './modules/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dog">
            <Fun />
          </Route>
          <Route path="/szczecin-weather">
            <SzczecinWeather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
