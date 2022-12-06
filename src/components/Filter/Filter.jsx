import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slice/filterSlice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const newFilter = e.target.value.trim().toLowerCase();
    dispatch(filterContacts(newFilter));
  };

  return (
    <>
      <FilterLabel>Filter contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={changeFilter}
        placeholder="Search name"
      />
    </>
  );
};
