import Navbar from "../components/Navbar";
import axios from "axios";
import "./styles/Register.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
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

    const handleRegister = () => {
        const logdata = {
            email : email,
            password : password,
        };
        axios
        .post('https://reqres.in/api/register', logdata)
        .then((res) => {
            console.log(res);
            setSuccess(res?.data?.message || "Register successful");
            localStorage.setItem('access_token', res?.data?.token);
            setError("");
            setTimeout(() => {
                navigate("/");
            }, 2000);     
        })
        .catch((err) => {
            console.log(err.response);
            setError(err?.response?.data?.message || "Register failed");
            setSuccess("");
        });
    };
    useEffect(() => {
      const formElement = document.querySelector(".register-form");
      formElement.classList.add("slide-in"); 
    }, []);
    return (
      <div className="register-page">
        <div className="background-overlay"></div>
        <Navbar />
        <div className="register">
          <div className="register-form">
            <h1>Register</h1>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <button onClick={handleRegister}>Register</button>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Register;    