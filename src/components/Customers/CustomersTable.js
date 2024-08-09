'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';

import Title from '../Title/Title';

// Generate Order Data
function createData(id, createdAt, name, avatar) {
  return { id, createdAt, name, avatar };
}

const rows = [
  createData(
    '1',
    '2024-08-09T00:17:10.639Z',
    'Lori McCullough',
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/944.jpg',
  ),
  createData(
    '2',
    '2024-08-09T00:17:10.639Z',
    'Glenda Dicki',
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/248.jpg',
  ),
];

function formatDateToBrazilian(date) {
  return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}

export default function CustomersTable() {
  return (
    <React.Fragment>
      <Title>Clients List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{formatDateToBrazilian(row.createdAt)}</TableCell>
              <TableCell>{row.name}</TableCell>
              {/* <TableCell align="right">{`$${row.avatar}`}</TableCell> */}
              <TableCell>
                <Avatar style={{display: 'inline-flex'}} src={row.avatar} />
              </TableCell>
              <TableCell align='right'>
                Edit
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
