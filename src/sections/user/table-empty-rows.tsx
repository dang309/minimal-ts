import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

interface TableEmptyRowsProps {
  emptyRows: number;
  height?: number; // Optional for custom height calculation. The height is calculated based on the number of empty rows. If not provided, the height will be 0.
}

export default function TableEmptyRows({ emptyRows, height }: TableEmptyRowsProps) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
