import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-[#1d1836] p-5 rounded-sm transition-transform 
          duration-300 hover:scale-105 hover:shadow-lg 
          hover:shadow-cyan-400 sm:w-[360px] w-full cursor-pointer' 
          onClick={() => window.open(source_code_link, "_blank")}
      >
        <div>
          <h3 className='text-white font-bold text-[24px] text-center'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-center'>{description}</p>
        </div>

        <div className='relative w-[90%] h-[170px] mx-auto mt-5'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>

        <div className='mt-5 flex flex-wrap gap-2 justify-center mx-auto'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-center ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='mt-14 flex flex-wrap gap-7 justify-center max-w-[1200px] mx-auto'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
