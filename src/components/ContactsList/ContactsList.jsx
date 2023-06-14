import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id} id={id} name={name} tel={number}>
            {name} : {number}
            <button type="button" onClick={onClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
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
