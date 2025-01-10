import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/GrantDashboard.css"; // Add styles

const GrantDashboard = () => {
  const [grants, setGrants] = useState([]); // Initialize grants as an empty array
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    sector: '',
    amountRange: '',
  });

  // Fetch grants from the backend
  useEffect(() => {
    const fetchGrants = async () => {
      try {
        const profileData = JSON.parse(localStorage.getItem('profileData')); // Retrieve profile data
        console.log('Profile Data Sent to Backend:', profileData);

        if (!profileData) {
          console.warn('No profile data found. Please complete your profile.');
          return;
        }

        const response = await axios.post('http://localhost:5000/api/grants', profileData);
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setGrants(response.data); // Set grants only if the response is an array
        } else {
          console.error('API did not return an array:', response.data);
          setGrants([]); // Default to an empty array
        }
      } catch (error) {
        console.error('Error fetching grants:', error);
        setGrants([]); // Default to an empty array on error
      }
    };

    fetchGrants();
  }, []);

  // Handle Search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle Filter Changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter and Search Grants
  const filteredGrants = Array.isArray(grants)
    ? grants.filter((grant) => {
        const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = filters.location ? grant.location === filters.location : true;
        const matchesSector = filters.sector ? grant.sector === filters.sector : true;
        const matchesAmount = filters.amountRange
          ? parseInt(grant.amount, 10) <= parseInt(filters.amountRange, 10)
          : true;
        return matchesSearch && matchesLocation && matchesSector && matchesAmount;
      })
    : [];

  return (
    <div className="grant-dashboard">
      <h2>Grant Matching Dashboard</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search grants..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* Filters */}
      <div className="filters">
        <select name="location" value={filters.location} onChange={handleFilterChange}>
          <option value="">All Locations</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Global">Global</option>
        </select>

        <select name="sector" value={filters.sector} onChange={handleFilterChange}>
          <option value="">All Sectors</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Environment">Environment</option>
        </select>

        <select name="amountRange" value={filters.amountRange} onChange={handleFilterChange}>
          <option value="">Any Amount</option>
          <option value="50000">Up to $50,000</option>
          <option value="75000">Up to $75,000</option>
        </select>
      </div>

      {/* Grant List */}
      <div className="grant-list">
        {filteredGrants.length > 0 ? (
          filteredGrants.map((grant) => (
            <div key={grant.id} className="grant-card">
              <h3>{grant.name}</h3>
              <p>Funding Amount: ${grant.amount}</p>
              <p>Deadline: {grant.deadline}</p>
              <p>Location: {grant.location}</p>
              <p>Sector: {grant.sector}</p>
              <button onClick={() => console.log(`Grant ${grant.id} saved!`)}>Save Grant</button>
              <button onClick={() => console.log(`Viewing details for Grant ${grant.id}`)}>View Details</button>
            </div>
          ))
        ) : (
          <p>No grants available. Please adjust your filters or try again later.</p>
        )}
      </div>
    </div>
  );
};

export default GrantDashboard;
