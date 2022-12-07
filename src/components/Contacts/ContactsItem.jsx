import React from 'react';
import PropTypes from 'prop-types';

// RTK Query - hook useDeleteContactMutation
import { useDeleteContactMutation } from 'redux/slice';

import {
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  // deleteContact — триггер,  isLoading — один из параметров объекта
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const handleClick = () => {
    deleteContact(id);
  };

  return (
    <ContactsListItem>
      <ContactsListText>
        {name}: {number}
      </ContactsListText>

      <ContactsButtonDelete type="button" onClick={handleClick}>
        {/* При удаленнии - на кнопке надпись Deleting... */}
        {isLoading ? 'Deleting...' : 'Delete'}
      </ContactsButtonDelete>
    </ContactsListItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
