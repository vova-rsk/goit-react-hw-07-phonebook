import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
// import serverApi from '../services/jsonserv-api';

// const getPreloadedState = () => {
//   serverApi.fetchContacts()
//     .then(res => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch(error => console.log(123));
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  // preloadedState: {
  //   contacts: {
  //     items: getPreloadedState(),
  //     filter: "",
  //     loading:false
  //   }
  // },
});

export default store;
