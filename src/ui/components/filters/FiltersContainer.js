import { Box, Button, Grid } from '@mui/material';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const FiltersContainer = ({
  children,
  applyFiltersFunc,
  resetFiltersFunc,
}) => (
  <>
    <Box style={style} width='100vw'>
      <Grid container spacing={2} style={style}>
        {children}
        <Grid item style={style}>
          <Button variant='contained' onClick={applyFiltersFunc}>
            Apply
          </Button>
        </Grid>
      </Grid>
    </Box>
    <Box style={style} sx={{ m: 3 }}>
      <Button onClick={resetFiltersFunc}>Reset filters</Button>
    </Box>
  </>
);
