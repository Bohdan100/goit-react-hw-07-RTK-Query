import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { appendContact, removeContact } from 'redux/slice/contactsSlice';
import * as contactsAPI from '../services';

axios.defaults.baseURL = 'https://638bb7497220b45d22958e91.mockapi.io/api/main';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const newContact = await contactsAPI.addContact(contact);
      dispatch(appendContact(newContact));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const contacts = await contactsAPI.deleteContact(Number(id));
      dispatch(removeContact(id));

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
