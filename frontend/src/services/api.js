// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Base URL for user API

// Register user function
export const registerUser = (formData) => {
  return axios.post(`${API_URL}/register`, formData); // POST request to register the user
};


