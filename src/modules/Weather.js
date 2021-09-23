import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import WeatherContainer from './WeatherContainer';
import { useGlobalContext } from '../context';

const Weather = () => {
  const { loading, data } = useGlobalContext();
  const text = 'Loading, please wait...';
  if (loading) {
    return <Loading text={text} />;
  }
  return (
    <section className="weather-list">
      {data.map((el) => {
        return <WeatherContainer key={el.date} {...el} />;
      })}
    </section>
  );
};

export default Weather;
