import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token ={}

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addContact = createAsyncThunk(actions.addContact, async data => {
  const { name, phone } = data;
  const contact = await addContactAPI(name, phone);
  return contact;
});

export const delContact = createAsyncThunk(actions.delContact, async id => {
  const contact = await delContactAPI(id);
  return contact;
});
