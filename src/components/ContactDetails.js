import React from "react";
import whatsapp from "../assest/whatapp.png";

const ContactDetails = () => {
    const whatsappLink = "https://wa.me/qr/SJTP3TMWHDPNG1"
  return (
    <>
      <div className="">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img className="intro-img" src={whatsapp} alt="Intro-img" />
        </a>{" "}
      </div>
    </>
  );
};

export default ContactDetails;
