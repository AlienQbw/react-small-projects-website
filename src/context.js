import React, { useContext, useState, useEffect, useCallback } from 'react';

/* const dogUrl = 'https://random.dog/woof.json'; */
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Weather api referance: http://www.7timer.info/doc.php?lang=en#civillight
  const url =
    'https://www.7timer.info/bin/civillight.php?lon=14.55302&lat=53.42894&ac=0&unit=metric&output=json&tzshift=0';

  //firstly asnych function declaration
  const fetchWeather = async () => {
    console.log(`im trying to fetch again, this is my current data: ${data}`);
    try {
      //then await for fetching of url (response)
      const response = await fetch(url);
      //then await and then assign json() data from response
      const weather = await response.json();
      setData(weather.dataseries);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  console.log(data);

  return (
    <AppContext.Provider value={{ loading, data }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
