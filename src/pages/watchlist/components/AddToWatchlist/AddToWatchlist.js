import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { nanoid } from 'nanoid';
import { AddNewItemForm } from './components/AddNewItemForm';
import { SelectEpisodeForm } from './components/SelectEpisodeForm';
import { containerStyle } from './AddToWatchlist.style';
import { addItem } from '../../../../store/watchlist/watchlist.slice';

export const AddToWatchlist = () => {
  const [textInput, setTextInput] = useState('');
  const [selectedEpisode, setSelectedEpisode] = useState('');

  const dispatch = useDispatch();

  function handleChange({ target }) {
    setTextInput(target.value);
  }

  function handleSelectChange({ target }) {
    setSelectedEpisode(target.value);
  }

  function handleClick() {
    if (textInput.length) {
      dispatch(
        addItem({
          content: textInput,
          id: nanoid(),
          isCompleted: false,
        })
      );
      setTextInput('');
    }
  }

  function handleAddEpisode() {
    dispatch(
      addItem({
        content: selectedEpisode,
        id: nanoid(),
        isCompleted: false,
      })
    );
    setSelectedEpisode('');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <Box sx={{ m: 3 }} style={containerStyle}>
      <Grid container style={containerStyle} spacing={10}>
        <Grid item>
          <AddNewItemForm
            textInput={textInput}
            handleChange={handleChange}
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item>
          <SelectEpisodeForm
            selectedEpisode={selectedEpisode}
            handleSelectChange={handleSelectChange}
            handleAddEpisode={handleAddEpisode}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
