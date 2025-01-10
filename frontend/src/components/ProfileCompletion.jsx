import React, { useState } from 'react';
import "../assets/ProfileCompletion.css"; // Import Profile Completion CSS
import { useNavigate } from 'react-router-dom';

const ProfileCompletion = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    sector: '',
    location: '',
    objectives: '',
    fundingAmount: '',
    yearsInOperation: '',
    registrationStatus: '',
    specialCriteria: '',
  });

  const [errors, setErrors] = useState({}); // Track validation errors
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    // Validation rules
    if (!formData.businessName) newErrors.businessName = 'Business Name is required.';
    if (!formData.businessType) newErrors.businessType = 'Please select a Business Type.';
    if (!formData.sector) newErrors.sector = 'Sector/Industry is required.';
    if (!formData.location) newErrors.location = 'Geographic Location is required.';
    if (!formData.objectives) newErrors.objectives = 'Grant Objectives are required.';
    if (!formData.fundingAmount || formData.fundingAmount <= 0) {
      newErrors.fundingAmount = 'Funding Amount must be a positive number.';
    }
    if (!formData.yearsInOperation) newErrors.yearsInOperation = 'Years in Operation is required.';
    if (!formData.registrationStatus) {
      newErrors.registrationStatus = 'Please select a Registration Status.';
    }

    setErrors(newErrors); // Update error state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validate()) {
      localStorage.setItem('profileData', JSON.stringify(formData)); // Save profile data
      console.log('Profile Data Saved:', formData); // Debugging log
      navigate('/dashboard'); // Redirect to Grant Dashboard
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="profile-completion-form">
      <h2>Complete Your Profile</h2>

      <input
        type="text"
        name="businessName"
        placeholder="Business Name"
        value={formData.businessName}
        onChange={handleChange}
      />
      {errors.businessName && <p className="error-message">{errors.businessName}</p>}

      <select
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
      >
        <option value="">Select Business Type</option>
        <option value="non-profit">Non-Profit</option>
        <option value="for-profit">For-Profit</option>
        <option value="startup">Startup</option>
      </select>
      {errors.businessType && <p className="error-message">{errors.businessType}</p>}

      <input
        type="text"
        name="sector"
        placeholder="Sector/Industry"
        value={formData.sector}
        onChange={handleChange}
      />
      {errors.sector && <p className="error-message">{errors.sector}</p>}

      <input
        type="text"
        name="location"
        placeholder="Geographic Location"
        value={formData.location}
        onChange={handleChange}
      />
      {errors.location && <p className="error-message">{errors.location}</p>}

      <textarea
        name="objectives"
        placeholder="Grant Objectives"
        value={formData.objectives}
        onChange={handleChange}
      ></textarea>
      {errors.objectives && <p className="error-message">{errors.objectives}</p>}

      <input
        type="number"
        name="fundingAmount"
        placeholder="Desired Funding Amount"
        value={formData.fundingAmount}
        onChange={handleChange}
      />
      {errors.fundingAmount && <p className="error-message">{errors.fundingAmount}</p>}

      <input
        type="text"
        name="yearsInOperation"
        placeholder="Years in Operation"
        value={formData.yearsInOperation}
        onChange={handleChange}
      />
      {errors.yearsInOperation && <p className="error-message">{errors.yearsInOperation}</p>}

      <select
        name="registrationStatus"
        value={formData.registrationStatus}
        onChange={handleChange}
      >
        <option value="">Registration Status</option>
        <option value="incorporated">Incorporated</option>
        <option value="sole proprietorship">Sole Proprietorship</option>
      </select>
      {errors.registrationStatus && <p className="error-message">{errors.registrationStatus}</p>}

      <textarea
        name="specialCriteria"
        placeholder="Special Criteria (if any)"
        value={formData.specialCriteria}
        onChange={handleChange}
      ></textarea>

      <button className="submit" type="submit">Submit Profile</button>
    </form>
  );
};

export default ProfileCompletion;
