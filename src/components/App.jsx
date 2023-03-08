import { H1Styled, H2Styled } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <>
      <H1Styled>Phonebook</H1Styled>
      <ContactForm />
      <H2Styled>Contacts</H2Styled>
      <Filter />
      <ContactList />
    </>
  );
};
