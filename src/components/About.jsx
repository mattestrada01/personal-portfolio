import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { github, linked, email } from "../assets"; 


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className= {styles.sectionSubText}>Discover My Background</p>
        <h2 className={styles.sectionHeadText}>Nice to meet you!</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:justify-between -mt-2">
        <motion.p
          variants={fadeIn("", "", 0.1, 3)}
          className='text-secondary text-[17px] max-w-2xl leading-[30px] mt-4'
        >
          I’m Matt Estrada, a Senior pursuing a Bachelor of Science in Software Engineering at 
          San Jose State University. I'm currently searching for a 2025 Summer Internship to expand my software experience! 
          <br></br><br></br>
          I’m passionate about video game development and front-end design, which allows me to bring my vision to life 
          through immersive digital experiences. My experience spans various languages and tech stacks, including Java, React, Python, fastAPI, and many more.
          <br></br><br></br>
          When I’m not coding, you’ll find me rock climbing, strumming my guitar, or helping stray cats in my community ツ

         <div className="flex justify-center mt-5 gap-6">
            <a href="https://github.com/mattestrada01 " target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 green-pink-gradient rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="GitHub" className="w-14 h-14" /> 
              </div> 
            </a>
            <a href="mailto:mathew.estrada@sjsu.edu" target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 green-pink-gradient rounded-full flex justify-center items-center cursor-pointer">
                <img src={email} alt="Email" className="w-14 h-14" /> 
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mathew-estrada-73284513a/" target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 green-pink-gradient rounded-full flex justify-center items-center cursor-pointer">
                <img src={linked} alt="Linked" className="w-14 h-14" /> 
              </div>
            </a>
          </div>
        </motion.p> 

        <motion.div
          variants={fadeIn("", "", 0.3, 3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} 
          className="flex-1 flex justify-center items-center md:ml-10 mt-10 mb-8 md:mt-0"
        >
          <div className='ml-10 mb-5 green-pink-gradient p-[2px] rounded-full'>
            <img src="/matt.png" alt="Matt Estrada" className="w-full max-w-[360px] rounded-full shadow-lg" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
