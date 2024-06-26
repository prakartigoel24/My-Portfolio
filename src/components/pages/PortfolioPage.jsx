import React from 'react';
import SubpageHero from '../SubpageHero';
import PortfolioSection from '../sections/PortfolioSection';
import ContactForm from '../ContactForm';
import Footer from '../Footer';
import TestimonialSection from '../sections/TestimonialSection';

const PortfolioPage = () => {
  return (
    <>
      <main>
        <SubpageHero
          heading={"Projects Showcase"}
          subheading={"Welcome aboard the dungeon of my projects in different modern technologies."}
          backgroundImg={"bg-spiral"}
          btnText={"Contact Me"}
          btnLink={"/contact"}
        />
      </main>
      <div className='divider_accent'></div>
      <PortfolioSection isSubsection={false}/>
      <div className='divider_secondary'></div>
      <TestimonialSection/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default PortfolioPage