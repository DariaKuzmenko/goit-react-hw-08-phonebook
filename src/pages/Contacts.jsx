import { ContactsSection, Title } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
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
