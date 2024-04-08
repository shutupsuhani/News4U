// Login.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login method from the AuthContext

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      login(user); // Set user information in the context
      setEmail("");
      setPassword("");
      toast.success("Login successful!");
      navigate("/latestNews");
    } catch (error) {
      console.error(error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="register-div">
      <h2>Login</h2>
      <div className="register-form">
        <label className="inputlabel">Email:</label>
        <input
          className="inputarea"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="inputlabel">Password:</label>
        <input
          className="inputarea"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin} className="reg-btn">
          Login
        </button>
      </div>
      <p>
        Already have an Account? <Link to="/register">Register</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
