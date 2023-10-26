import React from 'react'
import './NewsLetter.css'
import { useState } from 'react'
import axios from 'axios'

const NewsLetter = () => {
    const [email, setEmail] = useState('')

    const [message, setMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page.

        if (email) {
            axios
                .post("http://localhost:5000/sendEmail", {
                    email,
                })
                .then((response) => {
                    console.log(response.data); // Log the response data
                    alert("Message sent successfully");
                })
                .catch((error) => alert("Error while sending: " + error.message));

        } else {
            setMessage("Please enter the email");
        }
    };

    return (
        <div>
            <div className="newsletter">
                <span className='text'> SIGN UP FOR DAILY INSIDER</span>
                <input className='email' placeholder='email@abc.com' type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <button className='button' type="button" onClick={sendEmail}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;