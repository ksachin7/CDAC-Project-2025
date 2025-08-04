import React, { useState } from 'react';
import '../styles/register.css';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

// not in use
function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
    role: "CANDIDATE"
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmedPassword, role } = formData;

    if (!name || !email || !password || !confirmedPassword) {
      alert("All feilds are required!");
      return;
    }

    if (!/\S+@\S.\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if (password !== confirmedPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await registerUser({
        name, email, password, role
      });
      if (response && response.success) {
        setError('');
        setSuccess(response.message || "Registeration successful!");
        console.log("Registeration successful:", response);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmedPassword: '',
          role: ''
        })

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        // Handle known registration failure
        setError(response.message || "Registration failed!");
        setSuccess('');
      }
      // window.location.href = '/login';
    } catch (err) {
      const message =
        err?.message?.includes("Network Error") || !err.response
          ? "Unable to connect to the server. Please try again later."
          : "An unexpected error occurred.";

      setError(message);
      console.error("Error during registeration:", err);
      // setError(err.response?.data?.error || "Registeration failed!");
      setSuccess('');
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-input" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-input" placeholder="you@example.com" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-input" placeholder="********" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-input" placeholder="********" name="confirmedPassword" value={formData.confirmedPassword} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <div className="role-options form-radio-group">
              <label htmlFor="candidate" className="form-label">
                <input
                  type="radio"
                  id="candidate"
                  name="role"
                  value="CANDIDATE"
                  defaultChecked
                  onChange={handleChange}
                  required
                />
                CANDIDATE
              </label>

              <label htmlFor="interviewer" className="form-label">
                <input
                  type="radio"
                  id="interviewer"
                  name="role"
                  value="INTERVIEWER"
                  onChange={handleChange}
                  required
                />
                INTERVIEWER
              </label>
            </div>
          </div>

          {error && <p style={{ color: '#ff6666', fontSize: '0.875rem' }}>{error}</p>}
          {success && <p style={{ color: 'lightgreen', fontSize: '0.875rem' }}>{success}</p>}

          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="signin-text">
          Already have an account?{' '}
          <a href="/login" className="signin-link">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
