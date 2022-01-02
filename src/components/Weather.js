import { useState, useEffect, useCallback } from 'react';
import bgWeather from '../assets/bghome.jpg';

//styles
import './Weather.css';

const Weather = () => {
  //states
  const [result, setResult] = useState({});
  const [city, setCity] = useState('');

  const [first, setFirst] = useState(true);
  const [error, setError] = useState('');

  const [url, setUrl] = useState(
    'https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=2c75fa045ff62c4b2b1ceff4decef0f2'
  );

  //- Fetch
  const fetchWeather = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    if (json.cod === '404') {
      setError(json.message);
    } else {
      setError(false);
    }

    setResult(json);
  }, [url]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  //functions
  const submitHandler = (e) => {
    e.preventDefault();
    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2c75fa045ff62c4b2b1ceff4decef0f2`
    );
    setCity('');
    setFirst(false);
  };

  return (
    <div className='weather-app'>
      {result.main && (
        <div className='display'>
          <div className='city'>
            <h2>
              {result.name}, {result.sys.country}
            </h2>
            <p>{Math.round(result.main.temp)} &#176;C</p>
          </div>
          <div className='weather-icon'>
            <img
              src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
              alt='weather-icon'
            />
            <p className='week'> {result.weather[0].description}</p>
          </div>
        </div>
      )}

      {first && (
        <div className='display pm'> Search for weather of your city</div>
      )}
      {error && <div className='display pm'> {error}</div>}

      <div className='weather-bg'>
        <img src={bgWeather} alt='background for app' />
      </div>

      <div className='search'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Search ...'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Weather;
