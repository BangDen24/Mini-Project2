import Navbar from "../components/Navbar";
import "./styles/Login.scss";
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const logdata = {
      email: email, 
      password: password,
    };

    axios
      .post('https://reqres.in/api/login', logdata)
      .then((res) => {
        console.log(res);
        setSuccess(res?.data?.message || "Login successful");
        localStorage.setItem('access_token', res?.data?.token);
        setError("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err?.response?.data?.message || "Login failed");
        setSuccess("");
      });
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login">
      <div className="login-form">
      {success && <p style={{ color: "green", display: "block" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h1>Welcome Back!</h1>
      <p>Enter your email and password to sign in</p>
        <label>Email </label>
        <input
          onChange={handleEmail}
          type="email" 
          placeholder="Enter your email"
          value={email}
        />
        <label> Password </label>
        <input
          onChange={handlePassword}
          type="password" 
          placeholder="Enter your password"
          value={password}
        />
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link to="/register" className="sign-up-link">Sign Up</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Login;
