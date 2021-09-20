import React, { useContext, useState, useEffect, useCallback } from 'react';

/* const dogUrl = 'https://random.dog/woof.json'; */
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  /*   const [dogData, setDogData] = useState({});

  const fetchDogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(dogUrl);
      const data = await response.json();
      setDogData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDogs();
  }, []); */
  return (
    <AppContext.Provider value={{ loading }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
