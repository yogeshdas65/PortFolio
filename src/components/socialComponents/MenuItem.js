import * as React from "react";
import { motion } from "framer-motion";
// import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const socialMediaIcons = [faTwitter, faFacebook, faInstagram, faLinkedin , faWhatsapp ];
const socialMediaLinks = [
  "https://twitter.com/example",
  "https://facebook.com/example",
  "https://instagram.com/example",
  "https://linkedin.com/in/example",
  "https://web.whatsapp.com"
];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  // style={style}
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className=" "
    >
      {/* <div
        className="w-[20px] h-400 rounded-full flex-shrink-0 mr-20"
        style={style}
      ></div> */}
      {/* w-[200px] h-400  border-2 border-rose-500*/}
      <div className="rounded-2xl  flex-1 relative mb-2   " >
        <a href={socialMediaLinks[i]} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={socialMediaIcons[i]}
            size="3x"
             className={`text-${colors[i]}  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
             style={{ color: colors[i] }}
          />
        </a>
      </div>
    </motion.li>
  );
};
