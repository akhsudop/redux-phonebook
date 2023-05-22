import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import PropTypes from 'prop-types';

const CONTACTS_STORAGE_KEY = 'phonebook-contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isAlreadyExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const contactId = nanoid();
    if (contacts.length > 0 && isAlreadyExist) {
      window.alert(`Contact ${isAlreadyExist.name} already exists`);
    } else {
      setContacts([...contacts, { name: name, number: number, id: contactId }]);
    }
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleFilterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />
      <h3>Contacts:</h3>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactsList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </>
  );
};

App.propTypes = {
  id: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
