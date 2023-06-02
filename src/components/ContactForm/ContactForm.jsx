import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const isAlreadyExist = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );
    if (isAlreadyExist) {
      window.alert(`Contact ${isAlreadyExist.name} already exists`);
    } else {
      dispatch(
        addContact(e.target.elements.name.value, e.target.elements.number.value)
      );
      e.target.reset();
    }
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
