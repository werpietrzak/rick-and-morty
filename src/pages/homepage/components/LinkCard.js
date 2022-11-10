import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { linkCardStyle } from '../Homepage.style';

export const LinkCard = ({ route, imgSrc, name }) => (
  <Link to={route}>
    <Grid item style={linkCardStyle}>
      <img src={imgSrc} alt='Rick and Morty' width='200px' />
      <Button>{name}</Button>
    </Grid>
  </Link>
);
