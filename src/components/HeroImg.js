import "./HeroImgStyle.css";
import React from "react";
import Intro from "../assest/intro-bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Intro} alt="Intro-img"></img>
      </div>
      <div className="content">
         {/* Animate the paragraph with Framer Motion */}
      <motion.p initial={{ opacity: 9, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
        HI , Here Yogesh Das
      </motion.p>

      {/* Animate the heading with Framer Motion */}
      <motion.h1 initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        MernStack Developer
      </motion.h1>
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/project" className="btn">
            project
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </motion.div>
        
      </div>
    </div>
  );
};

export default HeroImg;
