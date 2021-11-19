import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL =
  'https://6191a09a41928b00176900d3.mockapi.io/phonebook';
// axios.defaults.baseURL = 'http://localhost:4000';

export async function fetchContactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContactAPI(name, phone) {
  // const newContact = { name, phone, id: uuidv4() };
  const newContact = { name, phone };
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function delContactAPI(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}
