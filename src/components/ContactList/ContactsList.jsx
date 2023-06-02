import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ myContacts }) => {
  return (
    <ul className={css.contactList}>
      {myContacts.map(contact => (
        <li className={css.contactDetails} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
