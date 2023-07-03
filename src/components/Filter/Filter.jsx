import { filterContact } from 'redux/filterSlice';
import { FilterEl, FilterLabel, FilterInput } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  return (
    <FilterEl>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          onChange={handleFilterChange}
          type="text"
          name="filter"
          value={filter}
        />
      </FilterLabel>
    </FilterEl>
  );
};
