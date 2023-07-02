import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';

// import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    if (contacts.some(element => element.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts(newContact));
  };

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </FormLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};
