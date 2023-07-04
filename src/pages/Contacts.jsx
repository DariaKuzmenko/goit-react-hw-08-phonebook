import { ContactsSection, Title } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
