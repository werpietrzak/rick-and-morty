import { Box, Typography } from '@mui/material';

export const SectionHeader = (props) => (
  <Box textAlign='center' sx={{ mt: 4, mb: 1 }}>
    <Typography sx={{ justifyContent: 'center' }} gutterBottom variant='h4'>
      {props.children}
    </Typography>
  </Box>
);
