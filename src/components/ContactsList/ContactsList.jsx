import { deleteContact, fetchContacts } from 'redux/operations';
import {
  ContactsEl,
  List,
  ContactsItem,
  ContactsBtn,
} from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = onFilterContacts();

  return (
    <ContactsEl>
      <List>
        {filterContacts.map(contact => (
          <ContactsItem
            key={contact.id}
            name={contact.name}
            tel={contact.number}
          >
            {contact.name} : {contact.number}
            <ContactsBtn type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </ContactsBtn>
          </ContactsItem>
        ))}
      </List>
    </ContactsEl>
  );
};
