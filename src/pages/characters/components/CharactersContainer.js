import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams, createSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { CharacterCard } from './CharacterCard';
import { CharactersFilters } from './CharactersFilters';
import { fetchCharacters } from '../../../store/characters/characters.slice';
import { StyledPagination } from '../../../ui/components/StyledPagination';

export const CharactersContainer = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters.characters);
  const pages = useSelector((state) => state.characters.pages);

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const status = searchParams.get('status');
  const species = searchParams.get('species');
  const gender = searchParams.get('gender');

  const initialState = {
    page: 1,
    status: '',
    species: '',
    gender: '',
  };

  const [filters, setFilters] = useState(initialState);

  const setSpecies = (value) => {
    setFilters({ ...filters, species: value });
  };

  const setStatus = (value) => {
    setFilters({ ...filters, status: value });
  };

  const setGender = (value) => {
    setFilters({ ...filters, gender: value });
  };

  const navigate = useNavigate();

  const setPage = (event, page) => {
    navigate({
      pathname: `/characters/`,
      search: `?${createSearchParams({ ...filters, page })}`,
    });
    setFilters({ ...filters, page });

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const applyFilters = () => {
    navigate({
      pathname: `/characters/`,
      search: `?${createSearchParams({ ...filters, page: 1 })}`,
    });
    setFilters({ ...filters, page: 1 });
  };

  const resetFilters = () => {
    navigate({
      pathname: `/characters/`,
      search: `?${createSearchParams({})}`,
    });
    setFilters(initialState);
  };

  useEffect(() => {
    dispatch(fetchCharacters({ gender, status, species, page }));
  }, [gender, status, species, page]);

  return (
    <>
      <Box>
        <CharactersFilters
          setGender={setGender}
          setSpecies={setSpecies}
          setStatus={setStatus}
          resetFilters={resetFilters}
          applyFilters={applyFilters}
          filters={filters}
        />
      </Box>
      <Grid container width='90vw' spacing={2}>
        {characters.map((item) => (
          <Grid item xs={2.95} key={item.id}>
            <CharacterCard item={item} />
          </Grid>
        ))}
      </Grid>
      <StyledPagination
        pages={pages}
        onChangeFunc={setPage}
        currentPage={page}
      />
    </>
  );
};
