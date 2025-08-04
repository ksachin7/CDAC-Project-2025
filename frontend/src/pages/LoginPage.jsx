import React, { useState } from "react";
import "../styles/login.css";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";





export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setError("");
      console.log("Login successful, redirecting to dashboard...") ;
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              required
              className="form-input"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              className="form-input"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="/register" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
