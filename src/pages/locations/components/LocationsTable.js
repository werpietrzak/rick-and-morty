import { useState, useEffect } from 'react';
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TableCell, TableRow } from '@mui/material';
import { LocationsFilters } from './LocationsFilters';
import { fetchLocations } from '../../../store/locations/locations.slice';
import { StyledPagination } from '../../../ui/components/StyledPagination';
import { StyledTable } from '../../../ui/components/StyledTable';
import { StyledTableContainer } from '../../../ui/components/StyledTableContainer';

export const LocationsTable = () => {
  const dispatch = useDispatch();

  const locations = useSelector((state) => state.locations.locations);
  const pages = useSelector((state) => state.locations.pages);

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const name = searchParams.get('name');
  const type = searchParams.get('type');
  const dimension = searchParams.get('dimension');

  const initialState = {
    page: 1,
    name: '',
    type: '',
    dimension: '',
  };

  const [filters, setFilters] = useState(initialState);

  const setName = (value) => {
    setFilters({ ...filters, name: value });
  };

  const setType = (value) => {
    setFilters({ ...filters, type: value });
  };

  const setDimension = (value) => {
    setFilters({ ...filters, dimension: value });
  };

  const navigate = useNavigate();

  const setPage = (event, page) => {
    navigate({
      pathname: `/locations/`,
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
      pathname: `/locations/`,
      search: `?${createSearchParams({ ...filters, page: 1 })}`,
    });
    setFilters({ ...filters, page: 1 });
  };

  const resetFilters = () => {
    navigate({
      pathname: `/locations/`,
      search: `?${createSearchParams({})}`,
    });
    setFilters(initialState);
  };

  useEffect(() => {
    dispatch(fetchLocations({ page, name, type, dimension }));
  }, [page, name, type, dimension]);

  const columnHeaders = ['No.', 'Name', 'Type', 'Dimension'];

  return (
    <>
      <Box>
        <LocationsFilters
          filters={filters}
          setName={setName}
          setDimension={setDimension}
          setType={setType}
          resetFilters={resetFilters}
          applyFilters={applyFilters}
        />
      </Box>
      <StyledTableContainer>
        <StyledTable columnHeaders={columnHeaders}>
          {locations.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.dimension}</TableCell>
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
