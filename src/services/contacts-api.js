import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
