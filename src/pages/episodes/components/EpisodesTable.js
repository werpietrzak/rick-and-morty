import { useEffect, useState } from 'react';
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TableCell, TableRow } from '@mui/material';
import { EpisodesFilters } from './EpisodesFilters';
import { fetchEpisodes } from '../../../store/episodes/episodes.slice';
import { StyledPagination } from '../../../ui/components/StyledPagination';
import { StyledTable } from '../../../ui/components/StyledTable';
import { StyledTableContainer } from '../../../ui/components/StyledTableContainer';

export const EpisodesTable = () => {
  const dispatch = useDispatch();

  const episodes = useSelector((state) => state.episodes.episodes);
  const pages = useSelector((state) => state.episodes.pages);

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const name = searchParams.get('name');

  const initialState = { page: 1, name: '' };

  const [filters, setFilters] = useState(initialState);

  const setName = (value) => {
    setFilters({ ...filters, name: value });
  };

  const navigate = useNavigate();

  const setPage = (event, page) => {
    navigate({
      pathname: `/episodes/`,
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
      pathname: `/episodes/`,
      search: `?${createSearchParams({ ...filters, page: 1 })}`,
    });
    setFilters({ ...filters, page: 1 });
  };

  const resetFilters = () => {
    navigate({
      pathname: `/episodes/`,
      search: `?${createSearchParams({})}`,
    });
    setFilters(initialState);
  };

  useEffect(() => {
    dispatch(fetchEpisodes({ page, name }));
  }, [page, name]);

  const columnHeaders = ['Episode no.', 'Title', 'Airing Date'];

  return (
    <>
      <Box>
        <EpisodesFilters
          filters={filters}
          setEpisodeTitle={setName}
          resetFilters={resetFilters}
          applyFilters={applyFilters}
        />
      </Box>
      <StyledTableContainer>
        <StyledTable columnHeaders={columnHeaders}>
          {episodes.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.air_date}</TableCell>
            </TableRow>
          ))}
        </StyledTable>
      </StyledTableContainer>
      <StyledPagination
        pages={pages}
        onChangeFunc={setPage}
        currentPage={page}
      />
    </>
  );
};
