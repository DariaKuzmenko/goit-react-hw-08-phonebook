import { ContactsSection, Title } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsAuthorized } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
