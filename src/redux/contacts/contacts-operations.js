import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/jsonserv-api';

export const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serviceApi.fetchContacts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/postContacts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await serviceApi.postContact(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await serviceApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// import * as actions from './contacts-actions';

// export const getContacts = () => dispatch => {
//   dispatch(actions.getContactsRequest());

//   serviceApi
//     .fetchContacts()
//     .then(res => dispatch(actions.getContactsSuccess(res.data)))
//     .catch(error => dispatch(actions.getContactsError(error)));
// };

// export const addContact = contact => dispatch => {
//   dispatch(actions.addContactRequest());

//   serviceApi
//     .postContact(contact)
//     .then(res => dispatch(actions.addContactSuccess(res.data)))
//     .catch(error => dispatch(actions.addContactError(error)));
// };

// export const deleteContact = id => dispatch => {
//   dispatch(actions.deleteContactRequest());

//   serviceApi
//     .deleteContact(id)
//     .then(_ => dispatch(actions.deleteContactSuccess(id)))
//     .catch(error => dispatch(actions.deleteContactError(error)));
// };
