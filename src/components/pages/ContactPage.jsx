import React from 'react';
import SubpageHero from '../SubpageHero';
import ContactForm from '../ContactForm';
import TestimonialSection from '../sections/TestimonialSection';
import Footer from '../Footer';

const ContactPage = () => {
  return (
    <>
     <main>
        <SubpageHero
          heading={"Reach out to me"}
          subheading={"Have a question or want to work together? Feel free to contact me!"}
          backgroundImg={"bg-triangle"}
          btnText={"About Me"}
          btnLink={"/about"}
        />
      </main>
      <ContactForm/>
      <TestimonialSection/>
      <Footer />
    </>
  )
}

export default ContactPage