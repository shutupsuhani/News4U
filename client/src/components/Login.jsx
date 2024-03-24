import { useState } from "react"
import "./register.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login=async()=>{
    
    try{
        const user=await signInWithEmailAndPassword(auth,email,password);
        console.log(user);
        setEmail("");
        setPassword("");
        toast.success("Registration successful!");
    } catch(error){
        console.log(error.message);
        toast.error("Registration failed. Please try again.");
    }
    
  }
    
  return (
    <div className='register-div'>
     
    <h2>Login</h2>
    <div className='register-form'>
      <label className='inputlabel'>Email:</label>
      <input className='inputarea' type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  required />
      <label className='inputlabel'>Password:</label>
      <input className='inputarea' type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />  
      <button onClick={login} className='reg-btn' >Login</button>
    </div>

    <p>Already have an Account? Register</p>
    <ToastContainer/>
  </div>
  )
}

export default Login
