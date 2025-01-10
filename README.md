

# Grants Matching Tool

This project is a web-based platform designed to streamline the process of matching grants to organizations, individuals, and institutions. It offers features for users to register, complete profiles, and discover suitable grants based on specific criteria. The tool is built using the MERN stack: **React** (Frontend), **Express** (Backend), and **MongoDB** (Database).

---

## Features

- **User Registration**: Secure user registration with validation.
- **Profile Completion**: Users can complete their profiles with details like business name, sector, and funding requirements.
- **Grants Matching Dashboard**: Displays personalized grant recommendations based on the user's profile.
- **Search and Filters**: Grants can be searched and filtered by location, sector, and funding amount.
- **Admin Dashboard**: Admins can view and manage user profiles and grant data (future implementation).
- **Authentication**: Secure user login and authentication using JSON Web Tokens (JWT).

---

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Express, Node.js
- **Database**: MongoDB
- **Authentication**: JWT for user authentication
- **Styling**: CSS, Google Fonts
- **Testing Tools**: Postman (optional)

---

## Setup Instructions

### Prerequisites

Before starting the project, ensure you have the following installed:
- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community)
- **Git**: For cloning the repository.
- **Postman**: For testing API requests (optional).

---

### Installation

#### Backend

1. Clone the repository:

   ```bash
   git clone <your-github-repo-url>
   ```

2. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

3. Install backend dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `backend` directory and configure your MongoDB connection string:

   ```plaintext
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

5. Seed the database with grants data (optional):

   ```bash
   node seeder.js
   ```

6. Start the backend server:

   ```bash
   npm start
   ```

   The backend will be running on `http://localhost:5000`.

---

#### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5174`.

---

### Usage

1. **User Registration**:
   - Navigate to the registration page.
   - Fill in your name, email, and password to register.

2. **Profile Completion**:
   - Complete your profile with business details, funding requirements, and sector preferences.

3. **Grant Matching Dashboard**:
   - View personalized grant recommendations based on your profile.

4. **Testing API**:
   - Use Postman to test the API endpoints.

---

### API Endpoints

#### **User Routes**
| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| POST   | `/api/users/register`     | Register a new user      |
| POST   | `/api/users/login`        | Login a user (future)    |

#### **Grant Routes**
| Method | Endpoint                  | Description                    |
|--------|---------------------------|--------------------------------|
| POST   | `/api/grants`             | Fetch grants matching profile |

---

### CORS Configuration

CORS (Cross-Origin Resource Sharing) is configured to allow requests from the frontend. To modify CORS settings, update the `server.js` file in the backend:

```javascript
app.use(cors({
  origin: 'http://localhost:5174', // Your frontend URL
}));
```

---

### Testing the API

Use **Postman** to test the API by sending requests like:

- **Register User**:
  - Endpoint: `POST http://localhost:5000/api/users/register`
  - Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Fetch Grants**:
  - Endpoint: `POST http://localhost:5000/api/grants`
  - Body:
    ```json
    {
      "location": "USA",
      "sector": "Technology",
      "fundingAmount": 50000
    }
    ```

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
