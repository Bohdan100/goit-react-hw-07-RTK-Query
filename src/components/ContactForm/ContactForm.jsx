import { Spinner } from 'components/Spinner/Spinner';
import { nanoid } from '@reduxjs/toolkit';

import {
  useCreateContactMutation,
  useFetchContactsListQuery,
} from 'redux/slice';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  PhonebookForm,
  PhonebookFormButton,
  PhonebookFormLabel,
  PhonebookFormInput,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsListQuery();

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const userName = form.elements.name.value;
    const userNumber = form.elements.number.value;

    const errorArray = contacts.filter(
      contact => contact.name.toLowerCase() === userName.toLowerCase()
    );

    if (errorArray.length === 0) {
      const newContact = { name: userName, phone: userNumber };

      createContact(newContact);
      toast.success('You add a new contact in your Phonebook!');
    } else {
      toast.info('This contact is already in your Phonebook!');
    }

    form.reset();
  };

  return (
    <>
      <PhonebookForm onSubmit={handleSubmit}>
        <PhonebookFormLabel htmlFor={nanoid(5)}>Name</PhonebookFormLabel>
        <PhonebookFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <PhonebookFormLabel htmlFor={nanoid(5)}>Number</PhonebookFormLabel>
        <PhonebookFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhonebookFormButton type="submit" disabled={isLoading}>
          {isLoading ? <Spinner size={16} /> : 'Add contact'}
        </PhonebookFormButton>
      </PhonebookForm>
      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </>
  );
};
