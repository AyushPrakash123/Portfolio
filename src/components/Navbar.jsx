import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/AyuLogo.png";
import { motion } from "framer-motion";


const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    
    <motion.div 
    animate={{ scale: [1, 1.2, 1] }} // Zoom in to 1.2 and then back to 1
    transition={{ 
        duration: 2, 
        ease: "easeInOut", 
        loop: Infinity }}
    className="flex flex-shrink-0 items-center">
        <img className="mx-2 rounded-full "src={logo} alt="logo" style={{ width: '120px' }}/>
    </motion.div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <motion.a 
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        href="https://www.linkedin.com/in/ayush-prakash-258abg/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <FaLinkedin/>
        </motion.a>
        <motion.a 
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        href="https://github.com/AyushPrakash123"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github">
        <FaGithub/>
        </motion.a>
        <motion.a 
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        href="https://x.com/praka58920"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter">
        <FaSquareXTwitter/>
        </motion.a>
    </div>
  </nav>; 
};

export default Navbar;