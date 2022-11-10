import { FiltersContainer } from '../../../ui/components/filters/FiltersContainer';
import { TextInput } from '../../../ui/components/filters/TextInput';
import { StyledAccordion } from '../../../ui/components/StyledAccordion';

export const EpisodesFilters = ({
  filters,
  setEpisodeTitle,
  resetFilters,
  applyFilters,
}) => {
  const handleChange = ({ target }) => {
    setEpisodeTitle(target.value);
  };

  return (
    <StyledAccordion>
      <FiltersContainer
        applyFiltersFunc={applyFilters}
        resetFiltersFunc={resetFilters}
      >
        <TextInput
          label='Episode title'
          value={filters.name}
          onChangeFunc={handleChange}
        />
      </FiltersContainer>
    </StyledAccordion>
  );
};
