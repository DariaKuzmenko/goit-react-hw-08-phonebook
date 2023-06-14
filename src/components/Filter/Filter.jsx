import PropTypes from 'prop-types';
import { FilterEl, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterEl>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </FilterLabel>
    </FilterEl>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
