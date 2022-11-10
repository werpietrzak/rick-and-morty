import { useSelector } from 'react-redux';
import { TableRow, TableCell } from '@mui/material';
import { WatchlistItem } from './WatchlistItem';
import { StyledTableContainer } from '../../../ui/components/StyledTableContainer';
import { StyledTable } from '../../../ui/components/StyledTable';

export const WatchlistTable = () => {
  const itemsToWatch = useSelector((state) => state.watchlist);

  return (
    <StyledTableContainer>
      <StyledTable>
        {!itemsToWatch.length && (
          <TableRow>
            <TableCell sx={{ textAlign: 'center' }}>No entries yet.</TableCell>
          </TableRow>
        )}
        {itemsToWatch.map((item, index) => (
          <WatchlistItem key={`watchlist${index}`} item={item} />
        ))}
      </StyledTable>
    </StyledTableContainer>
  );
};
