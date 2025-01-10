const express = require('express');
const Grant = require('../models/Grant');
const router = express.Router();

// Fetch grants based on user's profile
router.post('/', async (req, res) => {
  const { location, sector, fundingAmount } = req.body;

  try {
    console.log('Profile Data Received:', req.body);

    const query = {
      location: location || /.*/, // Match location or all if not specified
      sector: sector || /.*/, // Match sector or all if not specified
      amount: { $lte: fundingAmount || Number.MAX_SAFE_INTEGER }, // Match amount <= fundingAmount
    };

    console.log('Generated Query:', query);

    const grants = await Grant.find(query);

    if (grants.length === 0) {
      // Return an empty array instead of an object with a message
      return res.status(200).json([]);
    }

    res.status(200).json(grants);
  } catch (error) {
    console.error('Error fetching grants:', error);
    res.status(500).json({ message: 'Server error while fetching grants.' });
  }
});

module.exports = router;
