import { ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/Contacts/ContactList';
import Container from './App.styled';


const App = () => {
  return (
    <Container>
      <ToastContainer/>
      <h1>Phonebook</h1>
       <ContactForm/>
      <h2>Contacts</h2>
      {<Filter/>}
      <ContactList/>
    </Container>
  );
};

export default App;
