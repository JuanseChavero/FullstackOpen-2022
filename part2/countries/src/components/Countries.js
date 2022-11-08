const Countries = ({ countries, onClick }) => {
  if (countries.length === 0) return 'No countries found';

  if (countries.length > 10) return 'Too many matches, specify another filter';

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          <button onClick={() => onClick(country)}>show</button>
          <span style={{ marginLeft: 5 }}>{country.name.common}</span>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
