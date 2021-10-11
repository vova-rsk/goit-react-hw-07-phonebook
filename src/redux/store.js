import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import * as operations from './contacts/contacts-operations';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

store.dispatch(operations.getContacts());

export default store;
