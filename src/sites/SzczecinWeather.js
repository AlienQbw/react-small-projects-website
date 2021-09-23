import React from 'react';
import Weather from '../modules/Weather';

const SzczecinWeather = () => {
  return (
    <section className="container">
      <h2>Weather forecast in Szczecin for next 7 days:</h2>
      <Weather />
    </section>
  );
};

export default SzczecinWeather;
