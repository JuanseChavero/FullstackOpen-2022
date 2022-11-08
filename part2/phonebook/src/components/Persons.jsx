import PropTypes from 'prop-types';

// List of persons
function Persons({ persons, handleDelete }) {
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li key={person.id} className="person">
            <button type="button" onClick={() => handleDelete(person.id)}>
              delete
            </button>
            {`  ${person.name} ${person.number}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

Persons.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Persons;
