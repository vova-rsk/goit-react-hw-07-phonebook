import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, removeContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
