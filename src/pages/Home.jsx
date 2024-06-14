import React, { useState, useEffect } from 'react';
import Hash from '../components/Cparts/Hash';
import CoursesMy from '../components/Cparts/Courses';
import LeftHero from '../components/Cparts/LeftHero';
import RightHero from '../components/Cparts/RightHero';
import Navbar from '../components/Cparts/Navbar';
import { ImagesSliderDemo } from '../components/ui/Prolanding';
import { TextGenerateEffectDemo } from '../components/ui/TextGenerate';
import Revenue from '../components/Cparts/Revenue';
import Gallery from '../components/Cparts/Gallery';
// import { GlobeDemo } from '../components/ui/GithubGlobe';


const Home = () => {
  const [showTextDemo, setShowTextDemo] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowTextDemo(prevShowTextDemo => !prevShowTextDemo); 
    }, 9000);
    return () => clearInterval(intervalId);
  }, []); 
  return (
    <div>
      <Navbar />
      <Hash />
      <div style={{marginTop:"20px"}}>
        {/* {showTextDemo && <TextGenerateEffectDemo />}  */}
        {/* <ImagesSliderDemo /> */}
      </div>
      <div style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CoursesMy />
      </div>
      <Revenue/>
      <Gallery/>      
    </div>
  );
}

export default Home;
