import css from '../Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <section className={css.filterSec}>
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </label>
  </section>
);
