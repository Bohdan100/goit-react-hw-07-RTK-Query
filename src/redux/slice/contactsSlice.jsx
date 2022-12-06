import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const setPending = state => {
  state.isLoading = true;
};
const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    appendContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            ...text,
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
      // state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchContacts.pending]: setPending,

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [fetchContacts.rejected]: setError,
    [addContact.rejected]: setError,
    [deleteContact.rejected]: setError,
  },
});

export const { appendContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// 2. BUILDER
// extraReducers: (builder) => {
//  builder.addCase(fetchContacts.pending, (state) => {
//  state.isLoading = true;
// },
//  builder.addCase(fetchContacts.fulfilled, (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
//  builder.addCase(fetchContacts.rejected, (state, action) => {
//  state.isLoading = false;
//  state.error = action.payload;
// },

// 3. CLASSIC
// extraReducers: {
// [fetchContacts.pending]: state => {
//   return { ...state, isLoading: true };
// },
// [fetchContacts.fulfilled]: (state, action) => {
//   return { ...state, isLoading: false, error: null, items: action.payload };
// },
// [fetchContacts.rejected]: (state, action) => {
//   return { ...state, isLoading: false, error: action.payload };
// },
