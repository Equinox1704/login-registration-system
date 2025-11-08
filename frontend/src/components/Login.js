import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../FormStyles.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage("Login successful!");
      setTimeout(() => navigate("/dashboard"), 1000); // Redirect after 1s
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-header"><span>SIGN IN</span></div>
        <div className="auth-avatar"></div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <span className="auth-icon">👤</span>
            <input type="email" name="email" placeholder="username" value={form.email} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <span className="auth-icon">🔒</span>
            <input type="password" name="password" placeholder="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forgot your password?</a>
          </div>
          <button className="auth-btn" type="submit">LOGIN</button>
          {message && <div className="auth-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
