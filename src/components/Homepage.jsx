
import React from 'react';
import Header from './Header';
import Login from './login';
import './Homepage.css'
import Footer from './Footer';
import Featuredarticles from './Featuredarticles';
import FeaturedTutorials from './FeaturedTutorials';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='img'>
        <img src="https://scholarship-positions.com/wp-content/uploads/2017/06/Deakin-University-Postgraduate-Research-Scholarship-1024x597.png" alt="deakin"/>
      </div>
      <div className="ui container">

 
        <Featuredarticles />
        <FeaturedTutorials />
        <Header/>
        <Login/>
       
        <Footer/>
         
      </div>
    </div>
  );
};

export default Homepage;
