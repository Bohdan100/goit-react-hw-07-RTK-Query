import axios from 'axios';

axios.defaults.baseURL =
  'https://638bb7497220b45d22958e91.mockapi.io/api/main/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts/`, contact);
  return data;
}

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
