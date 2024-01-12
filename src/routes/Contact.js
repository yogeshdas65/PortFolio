import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import ContactDetails from "../components/ContactDetails";
// hello

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Lets have a Chat" />
      <ContactDetails/>
      <Footer />
    </div>
  );
};

export default Contact;
