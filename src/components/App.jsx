import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsSection, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    const newContact = { name, number, id: nanoid() };
    if (contacts.some(element => element.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleDelete = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const onFilterContacts = () => {
    const filterName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName)
    );
  };

  return (
    <ContactsSection>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} contacts={contacts} />

      <Title>Contacts</Title>
      <Filter filter={filter} onChange={onChangeFilter} />
      <ContactsList contacts={onFilterContacts()} onClick={handleDelete} />
    </ContactsSection>
  );
};
