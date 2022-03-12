import React, { useState } from 'react';
import { grey } from '@mui/material/colors';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableSortLabel
} from '@mui/material';

export default function useTable(records, headCells, totalRecords) {
  const pages = [5, 10, 15];
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = ({ target }) => {
    setLimit(target.value);
    setPage(0);
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const recordsAfterPagingAndSorting = () => stableSort(records, getComparator(order, orderBy));

  function TblContainer({ children }) {
    return (
      <Table
        sx={{
          marginTop: 3,
          '& tbody tr:hover': {
            backgroundColor: grey[100],
            cursor: 'pointer'
          }
        }}
      >
        {children}
      </Table>
    );
  }

  function TblHead() {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(cellId);
    };

    return (
      <TableHead
        sx={{
          '&.MuiTableHead-root': {
            backgroundColor: grey[100]
          }
        }}
      >
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              width={headCell.width}
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  function TblPagination() {
    return (
      <TablePagination
        component="div"
        count={totalRecords || records.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={limit}
        rowsPerPageOptions={pages}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  }

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    page: page + 1,
    limit
  };
}
