import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = async () => await axios.get('/contacts');

const postContact = async contactToAdd => {
  return await axios.post('/contacts', contactToAdd, { method: 'POST' });
};

const deleteContact = async id => {
  return await axios.delete(`/contacts/${id}`, { method: 'DEL' });
};

const api = {
  fetchContacts,
  postContact,
  deleteContact,
};

export default api;
