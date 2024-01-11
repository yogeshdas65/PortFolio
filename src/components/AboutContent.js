import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assest/React1.jpg";
import React2 from "../assest/React2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className="">Who Am I</h1>
        <p>Iam a Fullstack developer. I create responsive secure websites</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
