import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDelete }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className={css.contactDetails} key={id}>
          <span>
            {name}: {number}
          </span>
          <button type="button" onClick={() => onDelete(id)}>
            delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
