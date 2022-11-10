import { Pagination } from '@mui/material';

export const StyledPagination = ({ pages, onChangeFunc, currentPage }) => (
  <Pagination
    sx={{ m: 6 }}
    size='large'
    count={pages}
    shape='rounded'
    onChange={onChangeFunc}
    page={Number(currentPage) || 1}
  />
);
