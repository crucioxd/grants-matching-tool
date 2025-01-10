import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import ProfileCompletion from './components/ProfileCompletion';
import GrantDashboard from './components/GrantDashboard';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Centralized Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<ProfileCompletion />} />
          <Route path="/dashboard" element={<GrantDashboard />} />
        </Routes>
        <Footer /> {/* Centralized Footer */}
      </Router>
    </AuthProvider>
  );
};

export default App;
