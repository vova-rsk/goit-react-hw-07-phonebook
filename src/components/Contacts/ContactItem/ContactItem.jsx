import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import ListItem from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <span>{`${name}: ${number}`}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
};
