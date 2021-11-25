import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('Phonebook/changeFilter');
export const fetchContacts = createAction('Phonebook/fetchContacts');
export const addContact = createAction('Phonebook/addContact');
export const delContact = createAction('Phonebook/delContact');
