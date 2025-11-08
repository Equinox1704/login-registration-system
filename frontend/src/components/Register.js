import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../FormStyles.css";

export default function Register() {
  const [form, setForm] = useState({ name: '', dob: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage("Registration successful!");
      setTimeout(() => navigate("/dashboard"), 1000); // Redirect after 1s
    } catch (err) {
      setMessage(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-header"><span>SIGN UP</span></div>
        <div className="auth-avatar"></div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <span className="auth-icon">👤</span>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <span className="auth-icon">🎂</span>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <span className="auth-icon">📧</span>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <span className="auth-icon">🔒</span>
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          </div>
          <button className="auth-btn" type="submit">REGISTER</button>
          {message && <div className="auth-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
