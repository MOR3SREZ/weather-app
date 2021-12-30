import WeatherChange from './WeatherChange';
import Display from './Display';

//styles
import './Weather.css';

const Weather = () => {
  return (
    <div className='weather-app'>
      <Display />
      <WeatherChange />
    </div>
  );
};

export default Weather;
