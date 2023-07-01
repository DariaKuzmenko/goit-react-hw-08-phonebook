import { FilterEl, FilterLabel, FilterInput } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
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
