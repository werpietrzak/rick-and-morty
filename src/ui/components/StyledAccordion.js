import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 10,
  boxShadow: 'none',
};

export const StyledAccordion = (props) => (
  <Accordion style={style}>
    <AccordionSummary>
      <Typography>Filters ▾</Typography>
    </AccordionSummary>
    <AccordionDetails>{props.children}</AccordionDetails>
  </Accordion>
);
