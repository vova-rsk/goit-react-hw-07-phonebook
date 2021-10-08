import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/contacts/contacts-actions';
import ListItem from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <span>{`${name}: ${number}`}</span>
      <button type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </button>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
