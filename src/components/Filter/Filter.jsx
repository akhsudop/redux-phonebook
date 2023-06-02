import { useDispatch, useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <section className={css.filterSec}>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </label>
    </section>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
