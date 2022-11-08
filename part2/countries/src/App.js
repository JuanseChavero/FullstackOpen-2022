import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Country from './components/Country';
import Countries from './components/Countries';
import { countriesService } from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const hook = () => {
    try {
      countriesService.getAll().then((response) => {
        setCountries(response.data);
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(hook, []);

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  const handleSelectCountry = (country) => {
    setShowDetails(true);
    setSelectedCountry(country);
  };

  const handleOnClose = () => {
    setShowDetails(false);
    setSelectedCountry(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {showDetails ? (
        <Country country={selectedCountry} onClose={handleOnClose} />
      ) : (
        <div>
          <h1>Countries</h1>
          <Filter search={search} handleFilter={handleFilter} />
          <Countries
            countries={filteredCountries}
            onClick={handleSelectCountry}
          />
        </div>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
};

export default App;
