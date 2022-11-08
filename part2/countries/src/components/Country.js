import PropTypes from 'prop-types';
import { Weather } from './Weather';

const Country = ({ country, onClose }) => {
  const languages = () => {
    const languages = Object.values(country.languages);

    console.log(languages);

    return languages.map((language) => <li key={language}>{language}</li>);
  };

  const currencies = () => {
    const currencies = Object.values(country.currencies);

    return currencies.map((currency) => (
      <li key={currency}>{`${currency.symbol}: ${currency.name}`}</li>
    ));
  };

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>{languages()}</ul>
      <h3>Currencies:</h3>
      <ul>{currencies()}</ul>
      <h3>Flag:</h3>
      <img src={country.flags['png']} alt={`Flag of ${country.name}`} />
      <Weather country={country} />
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Country;
