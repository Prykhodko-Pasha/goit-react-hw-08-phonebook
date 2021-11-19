import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('Phonebook/changeFilter');
export const fetchContacts = createAction('Phonebook/fetchContacts');
export const addContact = createAction('Phonebook/addContact');
export const delContact = createAction('Phonebook/delContact');

// export const fetchContactsRequest = createAction(
//   'Phonebook/fetchContactsRequest',
// );
// export const fetchContactsSuccess = createAction(
//   'Phonebook/fetchContactsSuccess',
// );
// export const fetchContactsError = createAction('Phonebook/fetchContactsError');

// export const addContactRequest = createAction('Phonebook/addContactRequest');
// export const addContactSuccess = createAction('Phonebook/addContactSuccess');
// export const addContactError = createAction('Phonebook/addContactError');

// export const delContactRequest = createAction('Phonebook/delContactRequest');
// export const delContactSuccess = createAction('Phonebook/delContactSuccess');
// export const delContactError = createAction('Phonebook/delContactError');
