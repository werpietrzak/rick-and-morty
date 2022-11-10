import { FiltersContainer } from '../../../ui/components/filters/FiltersContainer';
import { SelectInput } from '../../../ui/components/filters/SelectInput';
import { StyledAccordion } from '../../../ui/components/StyledAccordion';
import {
  statusesList,
  gendersList,
  speciesList,
} from '../../../utils/filterLists';

export const CharactersFilters = ({
  setSpecies,
  setStatus,
  setGender,
  resetFilters,
  applyFilters,
  filters,
}) => {
  const handleSetGender = ({ target }) => {
    setGender(target.value);
  };

  const handleSetSpecies = ({ target }) => {
    setSpecies(target.value);
  };

  const handleSetStatus = ({ target }) => {
    setStatus(target.value);
  };

  return (
    <StyledAccordion>
      <FiltersContainer
        applyFiltersFunc={applyFilters}
        resetFiltersFunc={resetFilters}
      >
        <SelectInput
          label='Species'
          entries={speciesList}
          value={filters.species}
          onChangeFunc={handleSetSpecies}
        />
        <SelectInput
          label='Status'
          entries={statusesList}
          value={filters.status}
          onChangeFunc={handleSetStatus}
        />
        <SelectInput
          label='Gender'
          entries={gendersList}
          value={filters.gender}
          onChangeFunc={handleSetGender}
        />
      </FiltersContainer>
    </StyledAccordion>
  );
};
