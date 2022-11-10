import { Box } from '@mui/material';
import { EpisodesTable } from './components/EpisodesTable';
import { SectionHeader } from '../../ui/components/SectionHeader';
import { style } from '../../ui/styles/pageStyle';

export const Episodes = () => {
  return (
    <Box component='section' style={style}>
      <SectionHeader>Episodes</SectionHeader>
      <EpisodesTable />
    </Box>
  );
};
