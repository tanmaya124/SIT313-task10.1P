import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import axios from "axios";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const sendE = (e) => {
    e.preventDefault();

    if (email) {
      axios
        .post("http://localhost:3000/sendE", {
          email,
        })
        .then((response) => {
          console.log(response.data); 
          alert("Message sent successfully");
        })
        .catch((error) => alert("Error while sending: " + error.message));

      setMessage(null);
    } else {
      setMessage("Please enter the email");
    }
  };

  const errorMessageStyle = {
    color: 'red', 
    fontSize: '1.2rem', 
    fontWeight: 'bold', 
    margin: '10px 0', 
  };

  return (
    <body>
      <header>
        <form onSubmit={sendE} method='POST'>
          <div className="container">
            <div className="deakin">
              <p>Sign up for daily Insider</p>
              <div className="s">
                <input type='email' id="email" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
              </div>
              <div className="b">
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </form>
      </header>
      <br />
      {message && <div style={errorMessageStyle}>{message}</div>}
    </body>
  );
}

export default Login;
