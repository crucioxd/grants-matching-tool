const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Grant = require('./models/Grant');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleGrants = [
  { name: 'Tech Innovation Grant', amount: 50000, deadline: '2025-01-31', location: 'USA', sector: 'Technology' },
  { name: 'Healthcare Development Fund', amount: 75000, deadline: '2025-02-15', location: 'Canada', sector: 'Healthcare' },
  { name: 'Environmental Impact Grant', amount: 60000, deadline: '2025-03-01', location: 'Global', sector: 'Environment' },
];

const seedGrants = async () => {
  try {
    await Grant.deleteMany(); // Clear existing data
    await Grant.insertMany(sampleGrants);
    console.log('Sample grants added!');
    process.exit();
  } catch (error) {
    console.error('Error seeding grants:', error);
    process.exit(1);
  }
};

seedGrants();
