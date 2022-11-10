import { FiltersContainer } from '../../../ui/components/filters/FiltersContainer';
import { SelectInput } from '../../../ui/components/filters/SelectInput';
import { TextInput } from '../../../ui/components/filters/TextInput';
import { StyledAccordion } from '../../../ui/components/StyledAccordion';
import { typesList, dimensionsList } from '../../../utils/filterLists';

export const LocationsFilters = ({
  setName,
  setType,
  setDimension,
  resetFilters,
  applyFilters,
  filters,
}) => {
  const handleSetName = ({ target }) => {
    setName(target.value);
  };

  const handleSetType = ({ target }) => {
    setType(target.value);
  };

  const handleSetDimension = ({ target }) => {
    setDimension(target.value);
  };

  return (
    <StyledAccordion>
      <FiltersContainer
        applyFiltersFunc={applyFilters}
        resetFiltersFunc={resetFilters}
      >
        <TextInput
          label='Name'
          value={filters.name}
          onChangeFunc={handleSetName}
        />
        <SelectInput
          label='Type'
          entries={typesList}
          value={filters.type}
          onChangeFunc={handleSetType}
        />
        <SelectInput
          label='Dimension'
          entries={dimensionsList}
          value={filters.dimension}
          onChangeFunc={handleSetDimension}
        />
      </FiltersContainer>
    </StyledAccordion>
  );
};
