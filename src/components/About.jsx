import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Discover My Background</p>
        <h2 className={styles.sectionHeadText}>Nice to meet you!</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:justify-between mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 2)}
          className='text-secondary text-[17px] max-w-2xl leading-[30px]'
        >
          I’m Matt Estrada, a Senior currently pursuing a Bachelor of Science in Software Engineering at 
          San Jose State University. I specialize in developing web applications, engaging video games, and intelligent bots. 
          <br></br><br></br>
          My experience spans from creating a responsive business website with React and Tailwind CSS to developing a dynamic platformer game in Java.
          My technical expertise includes languages such as Java, JavaScript, and Python, and I’m adept at working with various web development technologies. 
          <br></br><br></br>
          Outside of coding, I enjoy rock climbing, playing guitar, and contributing to community efforts like helping stray cats. 
          I’m excited to bring my creativity and problem-solving skills to new opportunities and make a meaningful impact in the tech industry.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.4, 3.5)}
          initial="hidden"
          whileInView="show" // Ensures animation starts when in view
          viewport={{ once: true }} // Animation triggers only once when in view
          className="flex-1 flex justify-center items-center md:ml-10 mt-10 md:mt-0"
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
