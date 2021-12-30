//styles
import './Display.css';
import sunny from '../assets/sunny.png';
import useFetch from '../hooks/useFetch';

const Display = () => {
  const { result } = useFetch();
  console.log(result);

  return (
    <div className='display'>
      <div className='city'>
        <h2>torbat-jam </h2>
        <p>35 &#8451;</p>
      </div>
      <div className='weather-icon'>
        <img src={sunny} alt='weather-icon' />
        <p className='week'>Sun</p>
      </div>
    </div>
  );
};

export default Display;
