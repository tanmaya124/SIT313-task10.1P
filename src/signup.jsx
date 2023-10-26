import React, { useState } from 'react';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { addDoc, collection } from 'firebase/firestore';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null); // State to store and display validation errors.

  const navigate = useNavigate();

  const userDetail = async (e) => {
    await addDoc(collection(db, 'userDetails'), {
      email,
      password,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Validation: Check if required fields are filled.
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validation: Check if passwords match.
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully!');
      userDetail();
      return navigate('/login');
    } catch (error) {
      setError('Signup Error: ' + error.message);
    }
  };

  return (
    <form className="SignUp">
      <label className="Label">Name </label>
      <input required type="text" placeholder="Enter your name" />
      <label className="Label">Email: </label>
      <input required type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className="Label"> Password: </label>
      <input required type="password" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label className="Label"> Confirm-Password: </label>
      <input required type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      
      {error && <p className="ErrorMessage">{error}</p>} 
      
      <button className="Button1" type="submit" onClick={handleSignup}>
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
