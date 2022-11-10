import { Box, Button, TextField, Typography } from '@mui/material';
import { formStyle } from '../AddToWatchlist.style';

export const AddNewItemForm = ({
  textInput,
  handleChange,
  handleClick,
  handleKeyPress,
}) => {
  return (
    <Box>
      <Typography gutterBottom variant='subtitle1' component='h3'>
        Add new item...
      </Typography>
      <Box style={formStyle}>
        <TextField
          variant='outlined'
          value={textInput}
          placeholder='Add new watchlist item here'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Button variant='contained' onClick={handleClick}>
          Add
        </Button>
      </Box>
    </Box>
  );
};
