Absolutely 👍 — here’s your **cleaned-up, fully fixed, and GitHub-ready `README.md`** for the **login-registration-system** project.
I’ve corrected the formatting, added consistent code blocks, indentation, and spacing — so it looks professional and renders perfectly on GitHub.

---

```markdown
# 🔐 Login Registration System

A **full-stack MERN (MongoDB, Express.js, React, Node.js)** login and registration system featuring secure authentication, role-based access, and a responsive user dashboard.

---

## 🚀 Features

- ✅ User registration with form validation  
- 🔒 Secure login & logout  
- 🧠 Password encryption using **bcrypt**  
- 🔑 **JWT-based** authentication  
- 🗄️ Database with **MongoDB + Mongoose**  
- 🧑‍💼 User dashboard with listing (Admin view)  
- 🧩 Role & status management (Admin/User, Active/Suspended)  
- 🖼️ User avatars/gravatars  
- 💻 Responsive UI built with **React**  
- 🧰 CRUD operations (Edit/Delete users — admin only)  
- 🧱 Protected backend routes with Express middleware  
- 🌐 CORS-enabled for local frontend-backend communication  

---

## 📁 Folder Structure

```

root/
│
├── backend/       # Express/MongoDB/Node.js API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env.example
│   └── server.js
│
├── frontend/      # React app
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

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

* Copy the `.env.example` file and rename it to `.env`
* Fill in the required environment variables:

```bash
MONGODB_URI=mongodb://localhost:27017/YOUR_DB_NAME
JWT_SECRET=YourJWTSecret
PORT=5000
```

Start the backend server:

```bash
npm start
```

Backend runs on ➜ **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Frontend Setup (React)

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on ➜ **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 API Endpoints

| Method     | Endpoint              | Description                      |
| :--------- | :-------------------- | :------------------------------- |
| **POST**   | `/api/users/register` | Register new user                |
| **POST**   | `/api/users/login`    | Login and receive JWT token      |
| **GET**    | `/api/users/all`      | Admin: List all registered users |
| **PUT**    | `/api/users/:id`      | Update user info (admin only)    |
| **DELETE** | `/api/users/:id`      | Delete user (admin only)         |

---

## 🧩 Environment Variables

Example `.env` file for backend:

```bash
MONGODB_URI=mongodb://localhost:27017/loginDB
JWT_SECRET=MyStrongSecretKey
PORT=5000
```

---

## 🖼️ Screenshots

*Add your app screenshots or UI previews here!*

Example:

* Login Page
* Registration Page
* Dashboard
* Admin Panel

---

## 🧠 Future Enhancements

* 2FA (Two-Factor Authentication)
* Email verification
* Password reset via email
* Admin analytics dashboard
* Role-based route protection on frontend

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mayank Negi**

* GitHub: [@Equinox1704](https://github.com/Equinox1704)
* LinkedIn: [Mayank Negi](https://www.linkedin.com/in/mayank-negi-a99a79187)

> 💬 *Contributions, issues, and feature suggestions are welcome!*

```

---

Would you like me to add a **demo credentials section** (like in The Wild Oasis project) — e.g., test email and password — in case you host this online (for recruiters to log in)?
```
