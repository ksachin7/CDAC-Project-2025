import React, { useState } from 'react';
import '../styles/register.css';
import { registerUser } from '../authService';
import {useNavigate} from 'react-router-dom';


function RegisterPage() {
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
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
    const { name, email, password, confirmedPassword } = formData;

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
        name, email, password
      });
      setError('');
      setSuccess("Registeration successful!");
      console.log("Registeration successful:", response.data);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmedPassword: ''
      })

      setTimeout(() => {
        navigate('/login');
      }, 2000);

      // window.location.href = '/login';
    } catch (err) {
      setError(err);
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

          {error && <p style={{ color: 'red', fontSize: '0.875rem' }}>{error}</p>}
          {success && <p style={{ color: 'green', fontSize: '0.875rem' }}>{success}</p>}

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
