import { Box } from '@mui/material';
import { LocationsTable } from './components/LocationsTable';
import { SectionHeader } from '../../ui/components/SectionHeader';
import { style } from '../../ui/styles/pageStyle';

export const Locations = () => {
  return (
    <Box component='section' style={style}>
      <SectionHeader>Locations</SectionHeader>
      <LocationsTable />
    </Box>
  );
};
