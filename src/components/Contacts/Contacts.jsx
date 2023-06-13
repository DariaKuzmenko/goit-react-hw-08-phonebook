export const Contacts = ({ options, value }) => {
  return (
    <div>
      <ul>
        {options.map(({ name, id, number }) => (
          <li key={id} id={id} name={name} tel={number}>
            {name} : {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
