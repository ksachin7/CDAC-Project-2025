import React, { useState } from "react";
import "../styles/login.css";
import { login } from "../authService";
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
      navigate("/");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-page flex flex-col">
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

      <div 
      onClick={() => navigate("/")} 
      className="flex items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-600 transition mt-4"
    >
      {/* Left Arrow SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-6 h-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      
      <span className="font-semibold">Move to Home Page</span>
    </div>

    </div>
  );
}
