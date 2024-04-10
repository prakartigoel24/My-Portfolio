import React from 'react';
import '../../styles/testimonial.scss';
import {testimonials} from '../../constants';
import TestimonialItem from '../TestimonialItem';

const TestimonialSection = () => {
  return (
    <section className="section section_primary section_testimonial">
      <h2>Testimonials</h2>
      <div className="container">
        <TestimonialItem/>
      </div>
    </section>
  )
}

export default TestimonialSection

/*
{
  testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  name: "Sara Lee",
  designation: "CFO",
  company: "Acme Co",
  image: "https://randomuser.me/api/portraits/women/4.jpg",
},
*/