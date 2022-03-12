import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Title from '../../components/layout/Title';
import { selectUsers } from '../../store/users';

export default function UserSummary() {
  const users = useSelector(selectUsers);
  return (
    <>
      <Title>Recent Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.slice(0, 4).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Link color="primary" to="/users" style={{ color: 'green', marginTop: '20px' }}>
        See all users
      </Link>
    </>
  );
}
