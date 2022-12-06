import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';
import { GlobalStyle } from 'GlobalStyle';

import { PhonebookTitle, ContactsTitle } from 'App.styled';
import { Box } from './constants';
import { ContactForm } from './components/ContactForm';
import { Contacts } from './components/Contacts';
import { Filter } from './components/Filter';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box width="380px" m={[4, 'auto']} as="div">
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <Contacts />
      </Box>
    </ThemeProvider>
  );
};
