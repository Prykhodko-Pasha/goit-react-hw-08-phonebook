import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

// export const addContact = createAsyncThunk(actions.addContact, async data => {
//   const { name, phone } = data;
//   const contact = await addContactAPI(name, phone);
//   return contact;
// });

// export const delContact = createAsyncThunk(actions.delContact, async id => {
//   const contact = await delContactAPI(id);
//   return contact;
// });
