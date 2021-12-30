import WeatherChange from './WeatherChange';
import Display from './Display';
import SearchBar from './SearchBar';

//styles
import './Weather.css';

const Weather = () => {
  return (
    <div className='weather-app'>
      <Display />
      <WeatherChange />
      <SearchBar />
    </div>
  );
};

export default Weather;
