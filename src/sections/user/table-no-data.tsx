import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

interface TableNoDataProps {
  query: string; // Search query for the table.
}

export default function TableNoData({ query }: TableNoDataProps) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
        <Paper
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h6" paragraph>
            Not found
          </Typography>

          <Typography variant="body2">
            No results found for &nbsp;
            <strong>&quot;{query}&quot;</strong>.
            <br /> Try checking for typos or using complete words.
          </Typography>
        </Paper>
      </TableCell>
    </TableRow>
  );
}
