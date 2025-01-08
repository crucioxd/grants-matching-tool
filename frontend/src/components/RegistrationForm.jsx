// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { registerUser } from '../services/api'; // Import registerUser function from api.js
import "../assets/RegistrationForm.css"; // Import your CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle change in input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages
    setSuccessMessage(''); // Clear previous success messages

    try {
      // Call the registerUser function from api.js
      const response = await registerUser(formData);
      setSuccessMessage(response.data.message); // Display success message from backend
      setFormData({
        name: '',
        email: '',
        password: '',
      }); // Clear form fields on success
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
      
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default RegistrationForm;
