import React, { useState } from 'react';

import "../Css/Profile.css"

function Profile() {
    const [user, setUser] = useState({
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        gender: localStorage.getItem('gender') || '',
        nationality: localStorage.getItem('nationality') || '',
        postcode: localStorage.getItem('postcode') || '',
        password: localStorage.getItem('password'), // Add password field
    });

    // State to track whether the form is in edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Send updated user data to the server and handle the response
        // After a successful update, you can set isEditing to false
        // Also, update the local storage with the new user data
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('gender', user.gender);
        localStorage.setItem('nationality', user.nationality);
        localStorage.setItem('postcode', user.postcode);
        // Don't forget to update the password if it's changed
        localStorage.setItem('password', user.password);

        setIsEditing(false); // Exit edit mode
    };

    // Function to handle canceling the edit
    const handleCancelEdit = () => {
        setIsEditing(false);
        // Reset the user state to the data from local storage
        setUser({
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            gender: localStorage.getItem('gender'),
            nationality: localStorage.getItem('nationality'),
            postcode: localStorage.getItem('postcode'),
            password: localStorage.getItem('password'), // Reset password field
        });
    };

    return (
        <div className="profile">
            <div className="profile-info">
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <div className="inputField">
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="inputField">
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="inputField">
                            Gender:
                            <input
                                type="text"
                                name="gender"
                                value={user.gender}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="inputField">
                            Postcode:
                            <input
                                type="text"
                                name="postcode"
                                value={user.postcode}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="inputField">
                            Nationality:
                            <input
                                type="text"
                                name="nationality"
                                value={user.nationality}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="inputField">
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Add more fields for editing */}
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleCancelEdit}>Cancel</button>
                    </form>
                ) : (
                    <div>
                        <h2>Your Information: </h2>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Postcode: {user.postcode}</p>
                        <p>Nationality: {user.nationality}</p>
                        {/* Display other user information */}
                        <button onClick={() => {
                            const pass = prompt("Please enter the password to edit: ");
                            if (pass === user.password) {
                                setIsEditing(true);
                            } else {
                                alert("Your password is incorrect!");
                            }
                        }}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
