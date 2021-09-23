import React from 'react';

const WeatherContainer = ({ date, temp2m, weather, wind10m_max }) => {
  date = date.toString();
  const arrDate = date.split('');

  const year = arrDate[0] + arrDate[1] + arrDate[2] + arrDate[3];
  const month = arrDate[4] + arrDate[5];
  const day = arrDate[6] + arrDate[7];
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dayName = dayNames[new Date(year, month, day).getDay()];

  //all arrays belo correspond with index, i means taht weatherList[0] has link in icon[0]
  const weatherList = [
    'clearday',
    'pcloudy',
    'mcloudy',
    'cloudy',
    'rain',
    'snowh',
    'thunderstorm',
    'twrain',
  ];
  const icon = [
    'http://www.7timer.info/img/misc/about_two_clear.png',
    'http://www.7timer.info/img/misc/about_two_pcloudy.png',
    'http://www.7timer.info/img/misc/about_two_pcloudy.png',
    'http://www.7timer.info/img/misc/about_two_cloudy.png',
    'http://www.7timer.info/img/misc/about_two_rain.png',
    'http://www.7timer.info/img/misc/about_two_snow.png',
    'http://www.7timer.info/img/misc/about_two_ts.png',
    'http://www.7timer.info/img/misc/about_two_tsrain.png',
  ];
  const findWeatherIcon = weatherList.indexOf(weather);
  if (findWeatherIcon === -1) {
    console.log(`error, no such word: ${weather} in the weather list`);
  }

  return (
    <div className="weather-card">
      <ul>
        <li>
          <img
            src={icon[findWeatherIcon]}
            alt="weather-icon"
            className="icon"
          />
          <p>{`${year} | ${monthNames[month - 1]} ${dayName} ${day}`}</p>
        </li>
        <li>{`Heighest temp: ${temp2m.max}°`}</li>
        <li>{`Lowest. temp: ${temp2m.min}°`}</li>
      </ul>
    </div>
  );
};

export default WeatherContainer;
