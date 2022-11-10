import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { formStyle } from '../AddToWatchlist.style';

export const SelectEpisodeForm = ({
  selectedEpisode,
  handleSelectChange,
  handleAddEpisode,
}) => {
  const episodes = useSelector((state) => state.episodes.episodes);

  return (
    <Box>
      <Typography gutterBottom variant='subtitle1' component='h3'>
        ...or choose one from the list below!
      </Typography>
      <Box style={formStyle}>
        <FormControl fullWidth>
          <Select
            id='episodes'
            value={selectedEpisode}
            onChange={handleSelectChange}
          >
            {episodes.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant='contained' onClick={handleAddEpisode}>
          Add
        </Button>
      </Box>
    </Box>
  );
};
