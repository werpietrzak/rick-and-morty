import { Box, Grid, Typography } from '@mui/material';
import { LinkCard } from './components/LinkCard';
import { containerStyle } from './Homepage.style';

export const Homepage = () => {
  return (
    <Box component='section'>
      <Box sx={{ m: 6 }} textAlign='center'>
        <Typography gutterBottom variant='h3' component='h1'>
          Wubba Lubba Dub Dub!
        </Typography>
        <Typography gutterBottom variant='h5' component='h2'>
          Pick one of the categories below to explore <em>Rick and Morty</em>{' '}
          universe.
        </Typography>
      </Box>
      <Grid container component='nav' style={containerStyle}>
        <LinkCard
          route='/characters'
          imgSrc={require('../../ui/img/rick-and-morty-img4.png')}
          name='Characters'
        />
        <LinkCard
          route='/episodes'
          imgSrc={require('../../ui/img/rick-and-morty-img2.png')}
          name='Episodes'
        />
        <LinkCard
          route='/locations'
          imgSrc={require('../../ui/img/rick-and-morty-img3.png')}
          name='Locations'
        />
        <LinkCard
          route='/watchlist'
          imgSrc={require('../../ui/img/rick-and-morty-img1.png')}
          name='My Watchlist'
        />
      </Grid>
    </Box>
  );
};
