import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import Footer from './Footer'; // Only import Footer if it is needed locally
import '../assets/RegistrationForm.css';
import '../assets/CardAnimation.css'; // Import animation styles
import { useAuth } from '../context/AuthContext'; // Import AuthContext for authentication state

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false); // Track success status
  const { setIsAuthenticated } = useAuth(); // Access setIsAuthenticated function
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await registerUser(formData);
      setSuccessMessage(true); // Trigger success animation
      setFormData({ name: '', email: '', password: '' }); // Clear form fields

      // Set user as authenticated
      setIsAuthenticated(true);

      // Redirect after a short delay for the animation
      setTimeout(() => {
        navigate('/profile');
      }, 2000); // Adjust delay as needed
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Create Your Account</h2>

      {/* Overlay animation on success */}
      {successMessage && (
        <div className="success-card">
          <h2>Registration Successful!</h2>
          <p>You are being redirected to complete your profile...</p>
        </div>
      )}

      {/* Form fields */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        disabled={successMessage} // Disable input when success message is active
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        disabled={successMessage} // Disable input when success message is active
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        disabled={successMessage} // Disable input when success message is active
      />
      <button type="submit" className="submit" disabled={successMessage}>
        Register
      </button>

      {error && <p className="error-message">{error}</p>}
    </form>
    
  );
};

export default RegistrationForm;
