import React, { useState, useEffect } from 'react';
import Hash from '../components/Cparts/Hash';
import CoursesMy from '../components/Cparts/Courses';
import Navbar from '../components/Cparts/Navbar';
import Gallery from '../components/Cparts/Gallery';
import Footer from '../components/Cparts/footer';
import './Home.css'; // Assuming you want to add custom CSS for styling

const Home = () => {
  const [showTextDemo, setShowTextDemo] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowTextDemo(prevShowTextDemo => !prevShowTextDemo); 
    }, 9000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="home-container">
      <Navbar />
      <Hash />
      <div className="demo-container">
        {/* {showTextDemo && <TextGenerateEffectDemo />} */}
        {/* <ImagesSliderDemo /> */}
      </div>
      <div className="courses-container">
        <CoursesMy />
      </div>
      {/* <Revenue /> */}
      <Gallery /> 
      <Footer />     
    </div>
  );
}

export default Home;

