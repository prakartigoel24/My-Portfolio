import React from "react";
import Hero from "../Hero";
import SkillSection from "../sections/SkillSection";
import PortfolioSection from "../sections/PortfolioSection";
import ExperienceEduSection from "../sections/ExperienceEduSection";
import TestimonialSection from "../sections/TestimonialSection";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div>
      <main>
        <Hero />
      </main>
      <SkillSection />
      <PortfolioSection />
      <ExperienceEduSection />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
