import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// createAPI – ядро RTK-Querry, определяет endpoints, через которые можно работать с API
// fetchBaseQuerry – надтсройка над методом fetch, без 404 и json.stringify(parse), работает как axios;

const baseEndpointURL = 'https://638bb7497220b45d22958e91.mockapi.io/api/main';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  // reducerPath: 'contactsApi'- имя редюсера, в котором будут храниться данные
  baseQuery: fetchBaseQuery({
    // baseQuery - код подготовки fetch под тот API-бекенд, с которым мы будем работать;
    baseUrl: baseEndpointURL,
    // определение базового Url или нескольких Url,
    // с которым будет работать baseQuery
  }),
  // tagTypes - ключ в кеше
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    // endpoints — функция, которая возвращает объект, в котом будут действия, делающиеся с бекендом (get, post, update, delete)
    fetchContactsList: builder.query({
      // builder вызывает метод query
      query: () => '/contacts',
      // прикрепление ключа Contacts к данным с бекенда для работы в кеше
      providesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      // Инвалидация (удаление) контакта в кеше, снятие ключа с него
      invalidatesTags: ['Contacts'],
    }),

    createContact: builder.mutation({
      query: contactContent => ({
        url: '/contacts',
        method: 'POST',
        body: contactContent,
        // или
        // body: {
        //   name: contactContent.name,
        //   phone: contactContent.phone
        // },
      }),
      // перефетчить (зарендерить) новый созданный контакт в кеше
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// для кажого метода http-запроса, RTK-Query генерит свой собственный
// хук добавляя спереди слово use и делая заглавной букву F → f → fetch
// ПРИ ВЫЗОВЕ ХУКА  useCreateContactMutation — ДЕЛАЕТСЯ
// СООТВЕТСТВУЮЩИЙ ЕМУ HTTP-ЗАПРОС (get, post, put, delete)
export const {
  useFetchContactsListQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
