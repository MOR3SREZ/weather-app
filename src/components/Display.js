//styles
import './Display.css';
import sunny from '../assets/sunny.png';

const Display = () => {
  return (
    <div className='display'>
      <div className='city'>
        <h2>torbat-jam</h2>
        <p>35 &#8451;</p>
      </div>
      <div className='weather-icon'>
        <img src={sunny} alt='weather-icon' />
      </div>
    </div>
  );
};

export default Display;
