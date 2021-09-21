import React, { useEffect, useState } from 'react';
import Loading from '../modules/Loading';
import { useGlobalContext } from '../context';

const dogUrl = 'https://random.dog/woof.json';

const Fun = () => {
  const [loading, setLoading] = useState(true);
  const [dogData, setDogData] = useState({});

  const fetchDogs = async () => {
    try {
      const response = await fetch(dogUrl);
      const data = await response.json();
      setDogData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDogs();
  }, []);

  if (loading) {
    return (
      <section className="container flex">
        <div>
          <img
            onLoad={() => setLoading(false)}
            onError={() => {
              fetchDogs();
              console.log(`Couldn't load dog image :(, I'm trying again`);
            }}
            src={dogData.url}
            alt="cute dog"
            width="40%"
            height="40%"
          />
        </div>
        <Loading />
      </section>
    );
  }
  return (
    <section className="container flex">
      <div>
        <img src={dogData.url} alt="cute dog" width="40%" height="40%" />
        <br />
        <button
          className="btn"
          onClick={() => {
            fetchDogs();
            setLoading(true);
          }}
        >
          Get Random Dog!
        </button>
      </div>
    </section>
  );
};
export default Fun;
