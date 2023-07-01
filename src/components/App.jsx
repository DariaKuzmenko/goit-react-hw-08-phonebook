import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsSection, Title } from './App.styled';

export const App = () => {
  return (
    <ContactsSection>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </ContactsSection>
  );
};
