import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  onChangeFilter = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFilterContacts = () => {
    return this.state.contacts.filter(contact => {
      contact.name.includes(this.state.filter);
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        <Contacts value={this.onFilterContacts} options={this.state.contacts} />
      </div>
    );
  }
}
