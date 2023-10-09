/*User Management Page
Junaid Saleem 103824753
Last edited 10/10/2023*/
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

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
  const [currentUser, setCurrentUser] = useState({
    user_id: null,
    email: '',
    password: '',
    name: '',
    age: null,
    gender: '',
    nationality: '',
    postcode: ''
  });

  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);

  // Modal user input state
  const [modalUser, setModalUser] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    gender: '',
    nationality: '',
    postcode: '',
  });

  const handleEdit = (userId) => {
    setEditingUserId(userId);
    const userToEdit = users.find((user) => user.user_id === userId);
    setCurrentUser(userToEdit);
  };

  const handleGenderChange = (event) => {
    const updatedGender = event.target.value;
    setCurrentUser({
      ...currentUser,
      gender: updatedGender
    });
  };

  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setCurrentUser({
      ...currentUser,
      name: updatedName
    });
  };

  const handleAgeChange = (event) => {
    const updatedAge = event.target.value;
    setCurrentUser({
      ...currentUser,
      age: updatedAge
    });
  };

  const handleNationalityChange = (event) => {
    const updatedNationality = event.target.value;
    setCurrentUser({
      ...currentUser,
      nationality: updatedNationality
    });
  };

  const handlePostcodeChange = (event) => {
    const updatedPostcode = event.target.value;
    setCurrentUser({
      ...currentUser,
      postcode: updatedPostcode
    });
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.user_id !== userId);
    setUsers(updatedUsers);
  };

  const handleSave = (userId) => {
    const updatedUsers = users.map((user) =>
      user.user_id === userId ? { ...user, ...currentUser } : user
    );
    setUsers(updatedUsers);
    setEditingUserId(null);
    setCurrentUser({
      user_id: null,
      email: '',
      password: '',
      name: '',
      age: null,
      gender: '',
      nationality: '',
      postcode: ''
    });
  };

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    // Clear modalUser state when the modal is closed
    setModalUser({
      email: '',
      password: '',
      name: '',
      age: '',
      gender: '',
      nationality: '',
      postcode: '',
    });
  };

  // Function to add a new user
  const addUser = () => {
    // Generate a unique user_id for the new user
    const newUserId = users.length + 1;
    const newUser = {
      user_id: newUserId,
      ...modalUser,
    };
    setUsers([...users, newUser]);
    closeModal(); // Close the modal after adding the user
  };

  const renderUserRow = (user) => {
    const isEditing = user.user_id === editingUserId;

    return (
      <TableRow key={user.user_id}>
        <TableCell>{user.user_id}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{isEditing ? <TextField label="Name" defaultValue={user.name} onChange={handleNameChange} /> : user.name}</TableCell>
        <TableCell>{isEditing ? <TextField label="Age" defaultValue={user.age} onChange={handleAgeChange} /> : user.age}</TableCell>
        <TableCell>
          {isEditing ? (
            <TextField label="Gender" defaultValue={user.gender} onChange={handleGenderChange} />
          ) : (
            user.gender
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <TextField label="Nationality" defaultValue={user.nationality} onChange={handleNationalityChange} />
          ) : (
            user.nationality
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <TextField label="Postcode" defaultValue={user.postcode} onChange={handlePostcodeChange} />
          ) : (
            user.postcode
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <Button onClick={() => handleSave(user.user_id, user)}>Save</Button>
          ) : (
            <>
              <Button onClick={() => handleEdit(user.user_id)}>Edit</Button>
              <IconButton
                onClick={() => deleteUser(user.user_id)}
                style={{ color: 'lightcoral'}}
              >
                <Delete />
              </IconButton>
            </>
          )}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* Button to open the modal for adding a user */}
      <Button variant="outlined" onClick={openModal} style={{marginBottom: 10}}>
        Add User
      </Button>

      {/* Modal for adding a user */}
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        fullWidth
        maxWidth="sm"  // Adjust this value to your desired width
      >
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <form className={classes.form}>
            <TextField
              label="Email"
              fullWidth
              value={modalUser.email}
              onChange={(e) => setModalUser({ ...modalUser, email: e.target.value })}
            />
            <TextField
              label="Password"
              fullWidth
              value={modalUser.password}
              onChange={(e) => setModalUser({ ...modalUser, password: e.target.value })}
            />
            <TextField
              label="Name"
              fullWidth
              value={modalUser.name}
              onChange={(e) => setModalUser({ ...modalUser, name: e.target.value })}
            />
            <TextField
              label="Age"
              fullWidth
              value={modalUser.age}
              onChange={(e) => setModalUser({ ...modalUser, age: e.target.value })}
            />
            <TextField
              label="Gender"
              fullWidth
              value={modalUser.gender}
              onChange={(e) => setModalUser({ ...modalUser, gender: e.target.value })}
            />
            <TextField
              label="Nationality"
              fullWidth
              value={modalUser.nationality}
              onChange={(e) => setModalUser({ ...modalUser, nationality: e.target.value })}
            />
            <TextField
              label="Postcode"
              fullWidth
              value={modalUser.postcode}
              onChange={(e) => setModalUser({ ...modalUser, postcode: e.target.value })}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>


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
