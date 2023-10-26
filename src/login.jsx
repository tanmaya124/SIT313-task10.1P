import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in");
      return navigate("/");
    } catch (error) {
      console.log(error);
      setError("Invalid email or password");
    }
  };

  
  return (
    <div>
      <form className='Form' onSubmit={handleSubmit}>
       
          <label className='Label'> Email </label>
          <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        
                <label className='Label' >  Password </label>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <button type='submit' className='LoginButton'>Login</button>
        {error && <p className='error-message'>{error}</p>}

        <Link to='/Signup'><button className='Button'>Sign-Up</button></Link>
        
      </form>
    </div>

  );
}

export default Login;