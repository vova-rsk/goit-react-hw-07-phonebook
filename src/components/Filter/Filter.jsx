import { useSelector, useDispatch } from 'react-redux';
import Label from './Filter.styled';
import { getFilter } from '../../redux/contacts/counter-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <input type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value.trim()))}
        value={filter}
      />
    </Label>
  );
};

export default Filter;
