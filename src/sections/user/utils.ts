export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

export function emptyRows(
  page: number,
  rowsPerPage: number,
  arrayLength: number
): number {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator(
  a: { orderBy: string },
  b: { orderBy: string }
): number {
  if (a?.orderBy === null) {
    return 1;
  }
  if (b?.orderBy === null) {
    return -1;
  }
  if (b?.orderBy < a?.orderBy) {
    return -1;
  }
  if (b?.orderBy > a?.orderBy) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: "asc" | "desc"
): (a: { orderBy: string }, b: { orderBy: string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b)
    : (a, b) => -descendingComparator(a, b);
}

export function applyFilter<T>({
  inputData,
  comparator,
  filterName,
}: {
  inputData: T[];
  comparator: (a: T, b: T) => number;
  filterName: string;
}): T[] {
  const stabilizedThis = inputData.map(
    (el, index) => [el, index] as [T, number]
  );

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter((user: any) =>
      user.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }

  return inputData;
}
