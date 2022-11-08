// Filter input
import PropTypes from 'prop-types';

function Filter({ filter, handleFilterChange }) {
  return (
    <label htmlFor="filter">
      filter:
      <input
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        maxLength={30}
      />
    </label>
  );
}

// PropTypes
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
