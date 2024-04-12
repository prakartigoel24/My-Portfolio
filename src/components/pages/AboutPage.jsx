import React from "react";
import SubpageHero from "../SubpageHero";
import AboutMeSection from "../sections/AboutMeSection";
import "../../styles/aboutme.scss";

const AboutPage = () => {
  return (
    <>
      <main>
        <SubpageHero
          heading={"About Me"}
          subheading={"Get to know more about me."}
          backgroundImg={"bg-prism-spiral"}
          btnText={"My Portfolio"}
          btnLink={"/portfolio"}
        />
      </main>
      <AboutMeSection />
    </>
  );
};

export default AboutPage;
