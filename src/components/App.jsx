import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import PropTypes from 'prop-types';

const CONTACTS_STORAGE_KEY = 'phonebook-contacts';
const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount = () => {
    try {
      const startList = JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY));
      if (startList) {
        this.setState({ contacts: startList });
      }
    } catch (e) {
      console.error(e);
    }
  };

  componentDidUpdate = prevState => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        CONTACTS_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isAlreadyExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const contactId = nanoid();
    if (contacts.length > 0 && isAlreadyExist) {
      window.alert(`Contact ${isAlreadyExist.name} already exists`);
    } else {
      this.setState(state => ({
        contacts: [
          ...state.contacts,
          { name: name, number: number, id: contactId },
        ],
      }));
    }
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleDeleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h3>Contacts:</h3>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.handleDeleteContact}
        />
      </>
    );
  }
}

App.propTypes = {
  id: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
