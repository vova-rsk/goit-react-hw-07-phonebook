import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contact/add', contact => ({
  payload: { id: uuidv4(), ...contact },
}));

export const removeContact = createAction('contact/remove');

export const changeFilter = createAction('filter/change');
