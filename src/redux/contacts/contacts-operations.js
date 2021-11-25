import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import {
  fetchContactsAPI,
  addContactAPI,
  delContactAPI,
} from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  actions.fetchContacts,
  async () => {
    const contacts = await fetchContactsAPI();
    return contacts;
  },
);

export const addContact = createAsyncThunk(actions.addContact, async data => {
  console.log(data);
  const { name, number } = data;
  const contact = await addContactAPI(name, number);
  return contact;
});

export const delContact = createAsyncThunk(actions.delContact, async id => {
  const contact = await delContactAPI(id);
  return contact;
});
