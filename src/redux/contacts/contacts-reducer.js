import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [getContactsSuccess]: (state, action) => [...state, action.payload],
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [addContactRequest]: () => true,
  [deleteContactRequest]: () => true,
  [getContactsSuccess]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactError]: () => false,
  [deleteContactError]: () => false,
});

const contactsReducer = combineReducers({ items, filter, loading });

export default contactsReducer;
