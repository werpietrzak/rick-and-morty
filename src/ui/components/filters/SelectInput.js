import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

export const SelectInput = ({ label, entries, value, onChangeFunc }) => (
  <Grid item xs={2}>
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value} onChange={onChangeFunc}>
        {entries.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
);
