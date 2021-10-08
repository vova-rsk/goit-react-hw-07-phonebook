import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './ContactForm.styled';
import { getItems } from '../../redux/contacts/counter-selectors';
import { addContact } from '../../redux/contacts/contacts-actions';
import { availabilityСheck } from '../../utils/utils';

const ContactForm = () => {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  /*function for processing a form submission*/
  const handleSubmit = e => {
    e.preventDefault();

    if (availabilityСheck(contacts,name) || !name || !number) return;
   
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  /*function for handling data input to input-elem*/
  const handleChange = e => {
    const name = e.target.name;

    switch (name) {
      case 'name':
        setName(e.target.value.trim());
        break;
      
      case 'number':
        setNumber(e.target.value.trim());
        break;
      
      default:
        console.log('Oops! Something Went Wrong');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;

