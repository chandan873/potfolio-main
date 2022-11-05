import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import './About.css';


const AboutData=[
  {
    id:1,
    title:"Frontend Developer",
    description:"passion for building beautiful and function websites.",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png"

  },
  {
    id:2,
    title:"Backend Developer",
    description:"I am frontend developer with passion for building beautiful and function websites.",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png"

  },
  {
    id:3,
    title:"Web Designer",
    description:"I am frontend developer with passion for building beautiful and function websites.",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png"

  },
  ,
  {
    id:4,
    title:"UI/UX",
    description:"We Create Beautiful UI/UX Designs",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png"

  },

]

const About = () => {
  const [abouts, setAbouts] = useState([]);


  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {AboutData.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
