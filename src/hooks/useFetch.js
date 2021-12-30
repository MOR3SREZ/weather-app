import { useEffect, useState } from 'react';

const useFetch = (city) => {
  const [result, setResult] = useState({});
  useEffect(() => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '69df941599msh2c78a6b2f12d582p1563f3jsnd3e0ec3f1134',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(result);

  return { result };
};

export default useFetch;

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// {
//     "message": "accurate",
//     "cod": "200",
//     "count": 1,
//     "list": [
//         {
//             "id": 4429197,
//             "name": "Landon",
//             "coord": {
//                 "lat": 30.438,
//                 "lon": -89.1028
//             },
//             "main": {
//                 "temp": 295.92,
//                 "feels_like": 296.84,
//                 "temp_min": 295.16,
//                 "temp_max": 298.85,
//                 "pressure": 1015,
//                 "humidity": 99
//             },
//             "dt": 1640880559,
//             "wind": {
//                 "speed": 3.09,
//                 "deg": 210
//             },
//             "sys": {
//                 "country": "US"
//             },
//             "rain": null,
//             "snow": null,
//             "clouds": {
//                 "all": 90
//             },
//             "weather": [
//                 {
//                     "id": 741,
//                     "main": "Fog",
//                     "description": "fog",
//                     "icon": "50d"
//                 }
//             ]
//         }
//     ]
// }
