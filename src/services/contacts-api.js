import axios from 'axios';

export async function fetchContactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContactAPI(name, number) {
  const newContact = { name, number };
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function delContactAPI(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}
