import { FormControl, Grid, TextField } from '@mui/material';

export const TextInput = ({ label, value, onChangeFunc }) => (
  <Grid item xs={2}>
    <FormControl fullWidth>
      <TextField
        variant='outlined'
        placeholder='Filter by name'
        label={label}
        value={value}
        onChange={onChangeFunc}
      />
    </FormControl>
  </Grid>
);
