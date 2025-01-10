const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Grant = require('./models/Grant');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleGrants = [
  { name: 'Tech Innovation Grant', amount: 50000, deadline: '2025-01-31', location: 'USA', sector: 'Technology' },
  { name: 'Startup Boost Fund', amount: 45000, deadline: '2025-02-20', location: 'USA', sector: 'Technology' },
  { name: 'Green Energy Fund', amount: 50000, deadline: '2025-03-01', location: 'USA', sector: 'Environment' },
  { name: 'Healthcare Innovation Grant', amount: 60000, deadline: '2025-01-15', location: 'USA', sector: 'Healthcare' },
  { name: 'Global Climate Initiative', amount: 75000, deadline: '2025-03-30', location: 'Global', sector: 'Environment' },
  { name: 'Digital Transformation Grant', amount: 50000, deadline: '2025-04-15', location: 'USA', sector: 'Technology' },
  { name: 'Community Wellness Grant', amount: 40000, deadline: '2025-02-28', location: 'Canada', sector: 'Healthcare' },
  { name: 'Startup Accelerator Grant', amount: 55000, deadline: '2025-01-25', location: 'USA', sector: 'Technology' },
  { name: 'Renewable Energy Fund', amount: 70000, deadline: '2025-06-01', location: 'Canada', sector: 'Environment' },
  { name: 'Educational Technology Grant', amount: 50000, deadline: '2025-05-10', location: 'USA', sector: 'Technology' },
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
