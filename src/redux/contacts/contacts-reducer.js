import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { getContacts, addContact, deleteContact } from './contacts-operations';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => [...action.payload],
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [addContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [addContact.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [addContact.rejected]: (_, action) => action.payload,
  [deleteContact.rejected]: (_, action) => action.payload,
  [getContacts.fulfilled]: () => null,
  [addContact.fulfilled]: () => null,
  [deleteContact.fulfilled]: () => null,
});

const contactsReducer = combineReducers({ items, filter, isLoading, error });

export default contactsReducer;
