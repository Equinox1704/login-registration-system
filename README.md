# login-registration-system

A full-stack MERN (MongoDB, Express.js, React, Node.js) login and registration system with user dashboard, authentication, role/status management, and more.

## Features

- User registration with input validation
- Secure user login/logout
- Encrypted passwords with bcrypt
- JWT authentication (token-based)
- MongoDB database (Mongoose ORM)
- Dashboard with user listing (Admin view)
- Role & status fields (active, suspended, admin, user)
- Avatars/gravatars for users
- Responsive UI via React
- CRUD (edit/delete) functionality for users (admin)
- Protected backend routes (Express)
- CORS-enabled for local development

## Folder Structure

root/
│
├── backend/ # Express/MongoDB/Node.js API
│ ├── models/
│ ├── routes/
│ ├── .env.example
│ └── ...
│
├── frontend/ # React app
│ ├── src/
│ ├── public/
│ └── ...
│
└── README.md


## Setup

### 1. Clone the repo

git clone https://github.com/Equinox1704/login-registration-system.git
cd login-registration-system


### 2. Backend (Node.js API)
cd backend
npm install

Copy .env.example to .env and set MONGODB_URI, JWT_SECRET, etc.
npm start


### 3. Frontend (React)
cd ../frontend
npm install
npm start

- The React app runs on `localhost:3000`
- Backend API runs on `localhost:5000`

### 4. API Endpoints

Example:  
- `POST /api/users/register` — Register new user  
- `POST /api/users/login` — Login  
- `GET /api/users/all` — Admin: list users  

### 5. Environment Variables

backend/.env.example
MONGODB_URI=mongodb://localhost:27017/YOUR_DB
JWT_SECRET=YourJWTSecret
PORT=5000

## License

MIT

---

**Contributions and suggestions are welcome!**




