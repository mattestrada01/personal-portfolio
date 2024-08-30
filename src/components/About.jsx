import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[230px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.5)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

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
          <div className='green-pink-gradient p-[2px] rounded-full'>
            <img src="/matt.png" alt="Matt Estrada" className="w-full max-w-[360px] rounded-full shadow-lg" />
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");