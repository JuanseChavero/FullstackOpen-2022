/* eslint-disable no-alert */
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/phonebook';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((res) => setPersons(res.data));
  }, []);

  // Persons Filtering
  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  // Handle Name Change
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Handle Number Change
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // Handle Filter Change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Handle Form Submit
  const submitForm = (event) => {
    event.preventDefault();

    // Check if the name input is empty
    if (!newName) return;

    // Check if the name and number are already in the list
    if (
      persons.find(
        (person) => person.name === newName && person.number === newNumber,
      )
    ) {
      alert(
        `${newName} is already added to phonebook with the number ${newNumber}. If you want to update the number, please use another one.`,
      );
      return;
    }

    // Check if the name is already in the list
    if (persons.find((person) => person.name === newName)) {
      // Confirmation Dialog
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const person = persons.find((pers) => pers.name === newName);

        // Update the number
        personsService
          .update(person.id, {
            ...person,
            number: newNumber,
          })
          .then((returnedPerson) => {
            setPersons(
              persons.map((pers) => {
                return pers.id === returnedPerson.data.id
                  ? returnedPerson.data
                  : pers;
              }),
            );
            setNewName('');
            setNewNumber('');
            setMessage({
              content: `${returnedPerson.data.name} has been updated`,
            });
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch(() => {
            setMessage({
              content: `${newName} has already been removed from the server`,
              isError: true,
            });
            setTimeout(() => {
              setPersons(persons.filter((pers) => pers.name !== newName));
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      // Add the new person
      personsService
        .create(newPerson)
        .then((response) => {
          setPersons([...persons, response.data]);
          setNewName('');
          setNewNumber('');
          setMessage({
            content: `${newPerson.name} has been added to phonebook`,
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setMessage({
            content: 'There was an error creating the phonebook',
            isError: true,
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  // Handle Person Delete
  const handleDelete = (id) => {
    const person = persons.find((pers) => pers.id === id).name;
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(id).then(() => {
        setPersons(persons.filter((pers) => pers.id !== id));
        setMessage({
          content: `${person} has been deleted`,
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      {/* Person Form */}
      <PersonForm
        addName={submitForm}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      {/* List of Persons */}
      <h2>Numbers</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
