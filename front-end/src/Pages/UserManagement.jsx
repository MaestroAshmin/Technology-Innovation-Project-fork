/*Admin Main page
Junaid Saleem 103824753
Last edited 29/09/2023*/
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '1rem',
  },
});

const initialUsers = [
  {
    user_id: 1,
    email: 'user1@example.com',
    password: 'password1',
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    nationality: 'USA',
    postcode: '12345',
  },
  {
    user_id: 2,
    email: 'user2@example.com',
    password: 'password2',
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
    nationality: 'Canada',
    postcode: '67890',
  },
];

function UserManagement() {
  const classes = useStyles();
  const [users, setUsers] = useState(initialUsers);
  const [editingUserId, setEditingUserId] = useState(null);

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleSave = (userId, updatedUserData) => {
    const updatedUsers = users.map((user) =>
      user.user_id === userId ? { ...user, ...updatedUserData } : user
    );
    setUsers(updatedUsers);
    setEditingUserId(null);
  };

  const renderUserRow = (user) => {
    const isEditing = user.user_id === editingUserId;

    return (
      <TableRow key={user.user_id}>
        <TableCell>{user.user_id}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{isEditing ? <TextField label="Name" value={user.name} /> : user.name}</TableCell>
        <TableCell>{isEditing ? <TextField label="Age" value={user.age} /> : user.age}</TableCell>
        <TableCell>
          {isEditing ? (
            <TextField label="Gender" value={user.gender} />
          ) : (
            user.gender
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <TextField label="Nationality" value={user.nationality} />
          ) : (
            user.nationality
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <TextField label="Postcode" value={user.postcode} />
          ) : (
            user.postcode
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <Button onClick={() => handleSave(user.user_id, user)}>Save</Button>
          ) : (
            <Button onClick={() => handleEdit(user.user_id)}>Edit</Button>
          )}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      <h2>User Management</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="User table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Postcode</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => renderUserRow(user))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserManagement;
