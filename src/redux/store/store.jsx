import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { contactsApi } from '../slice';
import { filterSlice } from '../slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    // [contactsApi.reducerPath]: contactsApi.reducer, - означает на
    // contactsApi по пути  reducerPath автоматически сгенерируй
    // contactsApi.reducer. Редюсер генерится автоматически.
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    // contactsApi.middleware  - прослойка, которая занимается
    // кешированием и ннвалидацией. Стоит между dispatch и хранилищем
    // store и добавляется на contactsApi путем распыления в общий
    // массив прослоек middleware либо можно делать добавление через
    // метод concat, как в примерах на сайте RTK-Query
  ],
});

// чтоб работали методы refetchOnMount и refetchOnReconnect
setupListeners(store.dispatch);
