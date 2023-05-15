import css from '../ContactList/ContactList.module.css';

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
