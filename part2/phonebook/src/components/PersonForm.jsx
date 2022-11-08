// Person Form
import PropTypes from 'prop-types';

function PersonForm({
  addName,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) {
  return (
    <form onSubmit={addName}>
      <h2>Add a new Person</h2>
      <div>
        <label htmlFor="name">
          name:
          <input id="name" value={newName} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label htmlFor="number">
          number:
          <input
            id="number"
            value={newNumber}
            onChange={handleNumberChange}
            maxLength={30}
          />
        </label>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

PersonForm.propTypes = {
  addName: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  newNumber: PropTypes.string.isRequired,
};

export default PersonForm;
