```markdown
# Login Registration System

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) based **Login and Registration System** featuring authentication, user dashboard, and admin controls.

## 🚀 Features

- 🔐 User registration with input validation  
- 🔑 Secure user login/logout  
- 🔒 Encrypted passwords with **bcrypt**  
- 🧾 **JWT authentication** (token-based sessions)  
- 🗃️ **MongoDB database** using Mongoose ORM  
- 🧑‍💼 Admin dashboard with user listing  
- ⚙️ Role & status fields — *active, suspended, admin, user*  
- 🧠 Avatar/Gravatar integration  
- 💻 Responsive UI built with **React**  
- ✏️ CRUD operations (edit/delete users — admin only)  
- 🧱 Protected backend routes using Express middleware  
- 🌐 CORS-enabled for local development  

---

## 🗂️ Folder Structure

root/
│
├── backend/           # Express/MongoDB/Node.js API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env.example
│   └── server.js
│
├── frontend/          # React app
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Equinox1704/login-registration-system.git
cd login-registration-system
````

---

### 2️⃣ Backend Setup (Node.js + Express)

```bash
cd backend
npm install
```

* Copy `.env.example` → `.env`
* Set environment variables like MongoDB URI and JWT secret

Run the backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd ../frontend
npm install
npm start
```

* Frontend runs at: `http://localhost:3000`
* Backend API runs at: `http://localhost:5000`

---

## 🔗 API Endpoints

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/api/users/register` | Register a new user     |
| POST   | `/api/users/login`    | Login and get JWT token |
| GET    | `/api/users/all`      | Admin: List all users   |
| PUT    | `/api/users/:id`      | Admin: Update user info |
| DELETE | `/api/users/:id`      | Admin: Delete user      |

---

## 🌍 Environment Variables

**backend/.env.example**

```bash
MONGODB_URI=mongodb://localhost:27017/YOUR_DB_NAME
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🧑‍💻 Demo Access

This project is **protected with demo credentials**:

```
Username: test@abc.com
Password: root1234
```

---

## 🧾 License

This project is licensed under the **MIT License**.

---

### 🤝 Contributions

Contributions, issues, and suggestions are always welcome!
Feel free to submit a pull request or open an issue on GitHub.

**GitHub Repo:** [github.com/Equinox1704/login-registration-system](https://github.com/Equinox1704/login-registration-system)

```
