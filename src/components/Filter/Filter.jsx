export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <p> Find contacts by name </p>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </div>
  );
};
