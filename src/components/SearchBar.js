//components
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

// styles
import './SearchBar.css';

const SearchBar = () => {
  //states
  const [city, setCity] = useState();
  useFetch(city);

  //functions

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submited');
  };
  return (
    <div className='search'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Search ...'
          onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
