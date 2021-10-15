import axios from 'axios';

const BASE_URL = 'http://localhost:3004';

axios.defaults.baseURL = BASE_URL;

const fetchContacts = async () => {
  return await axios.get('/contacts');
};

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
