import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const StyledTable = ({ columnHeaders, children }) => (
  <TableContainer>
    <Table>
      {typeof columnHeaders !== 'undefined' && (
        <TableHead>
          <TableRow>
            {columnHeaders.map((item) => (
              <TableCell>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}
      <TableBody>{children}</TableBody>
    </Table>
  </TableContainer>
);
