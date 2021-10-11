import serviceApi from '../../services/jsonserv-api';
import * as actions from './contacts-actions';

export const getContacts = () => dispatch => {
  dispatch(actions.getContactsRequest());

  serviceApi
    .fetchContacts()
    .then(res => dispatch(actions.getContactsSuccess(res.data)))
    .catch(error => dispatch(actions.getContactsError(error)));
};

export const addContact = contact => dispatch => {
  dispatch(actions.getContactsRequest());

  serviceApi
    .postContact(contact)
    .then(res => dispatch(actions.getContactsSuccess(res.data)))
    .catch(error => dispatch(actions.getContactsError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  serviceApi
    .deleteContact(id)
    .then(_ => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
