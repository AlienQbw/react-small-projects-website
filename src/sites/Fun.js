import React, { useEffect, useState } from 'react';
import Loading from '../modules/Loading';
import { useGlobalContext } from '../context';

const dogUrl = 'https://random.dog/woof.json';

const Fun = () => {
  const [loading, setLoading] = useState(true);
  const [dogData, setDogData] = useState({});

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
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <img src={dogData.url} alt="cute dog" width="40%" height="40%" />
      <br />
      <button onClick={fetchDogs}>Get Another Dog!</button>
    </div>
  );
};

export default Fun;
