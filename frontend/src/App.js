import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function AppContent() {
  const location = useLocation();
  const hideNavOnLoginOrRegister = ["/login", "/register", "/dashboard"].includes(location.pathname);

  return (
    <>
      {!hideNavOnLoginOrRegister && (
        <nav>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </nav>
      )}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
