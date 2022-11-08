import { useEffect, useState } from 'react';
import weatherService from '../services/weather';

export const Weather = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  const temperature = (countryWeather?.main.temp - 273.15).toFixed(2);

  const capitalLat = country.capitalInfo.latlng[0];
  const capitalLon = country.capitalInfo.latlng[1];

  useEffect(() => {
    const fetchWeather = () => {
      weatherService.getWeather(capitalLat, capitalLon).then((response) => {
        setCountryWeather(response.data);
      });
    };
    fetchWeather();
  }, []);

  if (!countryWeather) return;

  return (
    <div>
      <h3>Weather in {country.capital[0]}</h3>
      <p>Temperature: {temperature}°C</p>
      <img
        src={`http://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`}
        alt={`Current weather in ${country.capital}: ${countryWeather.weather[0].description}`}
      />
      <p>Wind: {countryWeather.wind.speed} m/s</p>
    </div>
  );
};
