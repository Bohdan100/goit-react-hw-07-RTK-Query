import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from '../slice';
import { filterSlice } from '../slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
