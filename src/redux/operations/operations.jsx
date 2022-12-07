import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { appendContact, removeContact } from 'redux/slice/contactsSlice';
import * as contactsAPI from '../services';

axios.defaults.baseURL = 'https://638bb7497220b45d22958e91.mockapi.io/api/main';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: axios.defaults.baseURL,  }),

    tagTypes: ['Contacts'],
    endpoints: builder => ({
      fetchContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contacts'],
      }),

      deleteContact: builder.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],
      }),

    createContact: builder.mutation({
      query: contactContent => ({
        url: '/contacts',
        method: 'POST',
        body: {
          content: contactContent,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
