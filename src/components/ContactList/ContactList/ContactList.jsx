import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { getFilteredItems } from '../../../redux/contacts/counter-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredItems);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />))}
    </ul>
  );
};

export default ContactList;

