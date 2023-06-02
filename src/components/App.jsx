import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts:</h3>
      <Filter />
      <ContactsList myContacts={getVisibleContacts()} />
    </>
  );
};
