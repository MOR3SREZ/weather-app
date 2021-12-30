//styles
import './WeatherChange.css';
import bgWeather from '../assets/bghome.jpg';

const WeatherChange = () => {
  return (
    <div className='weather-bg'>
      <img src={bgWeather} alt='background for app' />
    </div>
  );
};

export default WeatherChange;
