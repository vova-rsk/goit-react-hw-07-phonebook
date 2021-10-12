import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem';
import { getFilteredItems } from '../../../redux/contacts/counter-selectors';
import * as operations from '../../../redux/contacts/contacts-operations'

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  },[dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />))}
    </ul>
  );
};

export default ContactList;

