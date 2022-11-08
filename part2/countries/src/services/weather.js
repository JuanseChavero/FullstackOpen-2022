import axios from 'axios';

const api_key_weather = process.env.REACT_APP_WEATHER_API_KEY;

const getWeather = (capitalLat, capitalLon) => {
  const response = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${capitalLat}&lon=${capitalLon}&appid=${api_key_weather}`,
  );
  return response;
};

const weatherService = {
  getWeather,
};

export default weatherService;
