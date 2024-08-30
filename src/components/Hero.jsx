import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full -ml-3 bg-[#00FFFF]" />
          <div className="relative w-1 sm:h-80 h-40 -ml-3 bg-gradient-to-b from-[#00FFFF] to-[#ffffff]">
            <div className="absolute bottom-0 left-0 right-0 h-0 flex justify-center">
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[16px] border-transparent border-t-[#ffffff]"></div>
            </div>
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#00FFFF]">Matt!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web-applications, engaging video games, <br className='sm:block hidden' />and intelligent bots to blend 
            technical programming <br className='sm:block hidden' />with my creativity.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
