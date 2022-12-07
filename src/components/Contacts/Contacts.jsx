import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

// RTK Query - hook useFetchContactsListQuery
import { useFetchContactsListQuery } from 'redux/slice';

import { ContactsList } from './Contacts.styled';
import { ContactsItem } from './ContactsItem';
import { Loader } from './Loader';

export const Contacts = () => {
  const filterName = useSelector(selectFilter);

  // transform response в RTK Query - нужные данные с бекенда
  const { data, isFetching, error } = useFetchContactsListQuery({
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  // const {
  //   currentData,
  //   data,
  //   error,
  //   isFetching,
  //   isLoading,
  //   isSuccess,
  //   isUninitialized,
  //   isError,
  //   refetch,
  //   status,
  // } = useFetchContactsListQuery();

  let visibleContacts = [];
  if (data) {
    const contacts = data;
    console.log('contacts', contacts);
    visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName)
    );
  }

  return (
    <>
      {isFetching && <Loader />}
      {error && <b>An error has occurred: {error.error}</b>}
      <ContactsList>
        {visibleContacts.length > 0 &&
          visibleContacts.map(({ id, name, phone }) => (
            <ContactsItem key={id} id={id} name={name} number={phone} />
          ))}
      </ContactsList>
    </>
  );
};
