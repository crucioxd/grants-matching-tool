const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // User routes
const grantRoutes = require('./routes/grantRoutes'); // Grant routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express();

// CORS Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith('http://localhost')) {
      callback(null, true); // Allow requests from localhost origins
    } else {
      callback(new Error('Not allowed by CORS')); // Block other origins
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
  credentials: true, // Allow cookies/auth headers
}));



app.options('*', cors()); // Allow preflight requests for all routes

app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/users', userRoutes); // Mount userRoutes on /api/users
app.use('/api/grants', grantRoutes); // Mount grantRoutes on /api/grants

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

// Catch-All for Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`); // Log the error
  res.status(err.status || 500).json({ message: 'Server error', error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
