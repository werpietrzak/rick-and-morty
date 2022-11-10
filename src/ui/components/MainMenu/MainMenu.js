import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Grid } from '@mui/material';
import { style } from './MainMenu.style';

export const MainMenu = () => {
  return (
    <AppBar position='static'>
      <Box sx={{ m: 1 }} textAlign='center'>
        <Link to='/'>
          <img
            src={require('../../img/Rick_and_Morty_logo.webp')}
            alt='logo'
            width='200px'
          />
        </Link>
      </Box>
      <Box sx={{ m: 1 }}>
        <Grid container spacing={6} component='nav' style={style}>
          <Grid item>
            <Link to='/characters'>
              <Button sx={{ color: 'white' }}>Characters</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/episodes'>
              <Button sx={{ color: 'white' }}>Episodes</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/locations'>
              <Button sx={{ color: 'white' }}>Locations</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/watchlist'>
              <Button sx={{ color: 'white' }}>My Watchlist</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};
