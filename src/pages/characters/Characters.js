import { Box } from '@mui/material';
import { CharactersContainer } from './components/CharactersContainer';
import { SectionHeader } from '../../ui/components/SectionHeader';
import { style } from '../../ui/styles/pageStyle';

export const Characters = () => {
  return (
    <Box component='section' style={style}>
      <SectionHeader>Characters</SectionHeader>
      <CharactersContainer />
    </Box>
  );
};
