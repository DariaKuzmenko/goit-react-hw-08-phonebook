import PropTypes from 'prop-types';
import {
  ContactsEl,
  List,
  ContactsItem,
  ContactsBtn,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <ContactsEl>
      <List>
        {contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            name={contact.name}
            tel={contact.number}
          >
            {contact.name} : {contact.number}
            <ContactsBtn type="button" onClick={() => onClick(contact.id)}>
              Delete
            </ContactsBtn>
          </ContactsItem>
        ))}
      </List>
    </ContactsEl>
  );
};

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
