import React from "react";
import SubpageHero from "../SubpageHero";
import AboutMeSection from "../sections/AboutMeSection";
import "../../styles/aboutme.scss";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <>
      <main>
        <SubpageHero
          heading={"About Me"}
          subheading={"Get to know more about me."}
          btnText={"Portfolio"}
          btnLink={"/portfolio"}
        />
      </main>
      <AboutMeSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default AboutPage;
