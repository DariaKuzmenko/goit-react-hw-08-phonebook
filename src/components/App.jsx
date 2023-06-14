import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsSection, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.some(element => element.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    } else
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onFilterContacts = () => {
    const filterName = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterName);
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const filteredContact = this.onFilterContacts();
    return (
      <ContactsSection>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        <ContactsList contacts={filteredContact} onClick={this.handleDelete} />
      </ContactsSection>
    );
  }
}
