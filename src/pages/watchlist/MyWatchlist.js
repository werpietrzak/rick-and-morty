import { Box, Typography } from '@mui/material';
import { AddToWatchlist } from './components/AddToWatchlist/AddToWatchlist';
import { WatchlistTable } from './components/WatchlistTable';
import { SectionHeader } from '../../ui/components/SectionHeader';
import { style } from '../../ui/styles/pageStyle';

export const MyWatchlist = () => {
  return (
    <Box component='section' style={style}>
      <SectionHeader>My Watchlist</SectionHeader>
      <Box textAlign='center'>
        <Typography gutterBottom variant='subtitle1' component='h3'>
          You can use this page to track episodes you'd like to watch.
        </Typography>
        <AddToWatchlist />
      </Box>
      <WatchlistTable />
    </Box>
  );
};
