import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../FormStyles.css";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/users/all")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="auth-bg" style={{ minHeight: "100vh" }}>
      <div className="auth-card" style={{
        width: "1050px", padding: "38px 30px",
        margin: "40px auto", boxShadow: "0 4px 18px #0001",
        background: "#fff", borderRadius: "18px"
      }}>
        {/* Modern header bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "38px",
        }}>
          <span style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "2px",
            color: "#232b3a"
          }}>
            DASHBOARD
          </span>
          <button
            onClick={handleLogout}
            style={{
              background: "linear-gradient(90deg,#fa265d,#fe753f)",
              color: "#fff",
              border: "none",
              borderRadius: "7px",
              cursor: "pointer",
              fontWeight: 600,
              padding: "10px 36px",
              fontSize: "1.05rem",
              boxShadow: "0 2px 8px #fa265d33"
            }}
          >
            Logout
          </button>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>
                  <img
                    src={user.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"}
                    alt="avatar"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #eee"
                    }}
                  />
                </td>
                <td style={{ fontWeight: 600 }}>{user.name}</td>
                <td>{user.dob ? new Date(user.dob).toLocaleDateString() : "-"}</td>
                <td>{user.email}</td>
                <td>{user.role || "User"}</td>
                <td>
                  <span style={{
                    color:
                      user.status === "Active"
                        ? "#32c854"
                        : user.status === "Inactive"
                        ? "#faad14"
                        : "#ee2c55",
                    fontWeight: "bold"
                  }}>
                    {user.status || "Active"}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => alert("Edit user " + user.name)}
                    style={{
                      background: "#eee",
                      borderRadius: "6px",
                      margin: "0 2px",
                      border: "none",
                      cursor: "pointer"
                    }}
                    title="Edit"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => alert("Delete user " + user.name)}
                    style={{
                      background: "#ee2c55",
                      color: "#fff",
                      borderRadius: "6px",
                      margin: "0 2px",
                      border: "none",
                      cursor: "pointer"
                    }}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 &&
          <p style={{ textAlign: "center", color: "#232b3a", marginTop: "32px" }}>
            No users registered yet.
          </p>}
      </div>
    </div>
  );
}
