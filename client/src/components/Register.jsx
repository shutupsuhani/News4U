import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.js";
import { Link,useNavigate } from 'react-router-dom';


const Register = () => {
   const [email,setEmail]=useState("");
   const [password, setPassword]=useState(""); 
   const navigate=useNavigate();
   const register=async ()=>{
        try{
          const user=await createUserWithEmailAndPassword(auth,email,password);
          console.log(user);

          setEmail("");
          setPassword("");
          toast.success("Registration successful!");
          navigate('/')
        } catch(err){
              console.log(err.message)
              toast.error("Registration failed. Please try again.");
        }
   }
  return (
    <>
   
    <div className='register-div'>
     
      <h2>Register</h2>
      <div className='register-form'>
        <label className='inputlabel'>Email:</label>
        <input className='inputarea' type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  required />
        <label className='inputlabel'>Password:</label>
        <input className='inputarea' type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />  
        <button onClick={register} className='reg-btn' >Register</button>
      </div>

      <p>Already have an Account? <Link to="/">Login</Link></p>
      <ToastContainer/>
    </div>

    </>
  );
};




export default Register;
