import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from './Navbar';
import Footer from './Footer';
import "../assets/Home.css";
import heroimg from '../assets/heroimg.png'; // Adjust the path based on your file structure
import heroimg2 from '../assets/heroimg2.png';

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  return (

    <div className="home">
     
      <img
  src={heroimg}
  alt="Decorative Banner"
  className="hero-image"
/>
<img
  src={heroimg2}
  alt="Decorative Banner"
  className="hero-image2"
/>
 

      <header className="hero">
        <h1>Welcome to the Grants Matching Tool</h1>
        <p>Your journey to finding the right grants starts here.</p>
      
      </header>

      <section className="features">
        <div className="card">
          <h3>Find the Perfect Grant for Your Needs</h3>
          <p>Our advanced matching algorithm filters through thousands of grants to find the ones that align with your business goals, industry, and location.</p>
          <button className="card-button">Discover Grants</button>
        </div>
        <div className="card">
          <h3>Simple Onboarding Process</h3>
          <p>Sign up in minutes and unlock access to a powerful database of grants. Our secure payment system ensures your information is safe.</p>
          <button className="card-button">Sign Up Today</button>
        </div>
        <div className="card">
          <h3>Write Winning Applications</h3>
          <p>Use our step-by-step templates and expert tips to create standout grant applications. Maximize your chances of success with ease.</p>
          <button className="card-button">Explore Resources</button>
        </div>
      </section>

      <div className="cta-card">
  <h2>Ready to Find Your Grant?</h2>
  <p>Join thousands of businesses and organizations who trust our tool to unlock funding opportunities.</p>
  <button 
          className="cta-button" 
          onClick={() => navigate('/register')} // Navigate to the Registration Form
        >
          Get Started
        </button>
</div>

 
    </div>
  );
};

export default Home;
