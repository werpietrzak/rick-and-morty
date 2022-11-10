import { useDispatch } from 'react-redux';
import { Button, Checkbox, TableCell, TableRow } from '@mui/material';
import {
  deleteItem,
  checkItem,
} from '../../../store/watchlist/watchlist.slice';

export const WatchlistItem = ({ item }) => {
  const dispatch = useDispatch();

  function handleCheckItem() {
    dispatch(checkItem(item));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(item));
  }

  const styleChecked = {
    textDecoration: 'line-through',
  };

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          type='checkbox'
          checked={item.isCompleted}
          onChange={handleCheckItem}
        />
      </TableCell>
      <TableCell style={item.isCompleted ? styleChecked : undefined}>
        {item.content}
      </TableCell>
      <TableCell>
        <Button onClick={handleDeleteItem}>Delete Item</Button>
      </TableCell>
    </TableRow>
  );
};
