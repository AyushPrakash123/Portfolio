import {HERO_CONTENT} from "../constants";
import profile from "../assets/ProfilePic.png";
import { delay, motion } from "framer-motion";

const container=(delay) => ({
   hidden:{x:-100, opacity:0},
   visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay},
   },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                  <motion.h1 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Ayush Prakash
                  </motion.h1>
                  <motion.span 
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                    Software Engineer | Full-Stack Developer | DSA Enthusiast
                  </motion.span>
                  <motion.p 
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {HERO_CONTENT}
                  </motion.p>
                  <motion.a 
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    variants={container(1.75)}
                    initial="hidden"
                    animate="visible"
                    href="A_P_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-gradient-to-r from-purple-400 to-purple-700 text-white rounded-full p-4 text-sm text-stone-800 mb-10">
                    Download Resume
                  </motion.a>      
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    style={{ width: '450px' }}
                    initial={{x:100, opacity:0}} 
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:1.5}}
                    className="rounded-3xl"
                    src={profile} alt="profile pic"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero