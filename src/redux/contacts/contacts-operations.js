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
