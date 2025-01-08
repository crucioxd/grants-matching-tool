

# Grants Matching Tool

This project is a web-based platform for matching grants to organizations, individuals, and institutions. It allows users to register, submit applications, and manage their profiles. Built with React (Frontend) and Express (Backend), the project leverages MongoDB for data storage.

## Features
- **User Registration**: Users can register with their name, email, and password.
- **Admin Dashboard**: Admin can view and manage user registrations and applications.
- **Grants Matching**: The platform matches users with suitable grants based on specific criteria.

## Tech Stack
- **Frontend**: React, Vite
- **Backend**: Express, Node.js
- **Database**: MongoDB
- **Authentication**: JWT for user authentication

## Setup Instructions

### Prerequisites

Before starting the project, ensure you have the following installed:
- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community)
- **Postman**: For testing API requests (optional).

### Installation

1. Clone the repository:

   ```bash
   git clone <your-github-repo-url>
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies for the backend:

   ```bash
   npm install
   ```

4. Set up your MongoDB connection:
   - Create a `.env` file in the backend directory with the following content:
   
   ```
   MONGO_URI=<your-mongodb-connection-string>
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

6. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

7. Install dependencies for the frontend:

   ```bash
   npm install
   ```

8. Start the frontend server:

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5174`.

### CORS Configuration
CORS (Cross-Origin Resource Sharing) is enabled for all origins in the backend. To restrict it to specific origins, modify the `server.js` file in the backend and set the allowed origin:

```javascript
app.use(cors({
  origin: 'http://localhost:5174', // Your frontend URL
}));
```

### Testing the API
You can use **Postman** to test the API by sending a POST request to `http://localhost:5000/api/users/register` with a JSON body containing:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

