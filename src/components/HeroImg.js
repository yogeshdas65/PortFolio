import "./HeroImgStyle.css";
import React from "react";
import Intro from "../assest/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Intro} alt="Intro-img"></img>
      </div>
      <div className="content">
        <p>HI , Here Yogesh Das</p>
        <h1>MernStack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            project
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
