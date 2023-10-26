import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase auth functions
import './navigation.css'


const TopBar = () => {
  const [user, setUser] = useState(null); // Initialize user state
  const auth = getAuth();

  useEffect(() => {
    // Use the onAuthStateChanged listener to track user authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is not logged in
        setUser(null);
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="Top">
      <Link to="/">
        <div className="Home">DEV@Deakin</div>
      </Link>

      <div className="searchBar">
        <input type="search" placeholder="Search" />
      </div>

      <div className="btn1">
        {!user ? ( // If user is not logged in, display the Login button
          <Link to="/Login">
            <button>Login</button>
          </Link>
        ) : ( // If user is logged in, display the Logout button
          <Link to="/Logout">
            <button>Logout</button>
          </Link>
        )}
      </div>

      <div className="btn1">
        {!user ? ( // If user is not logged in, display the Sign Up button
          <Link to="signup">
            <button>Sign Up</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;