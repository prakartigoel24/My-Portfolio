import React from 'react';
import '../../styles/testimonial.scss';
import {testimonials} from '../../constants';
import TestimonialItem from '../TestimonialItem';

const TestimonialSection = () => {
  return (
    <section className="section section_primary section_testimonial">
      <h2>Testimonials</h2>
      <div className="container">
        {testimonials.map((item, i)=>{
          return (
            <TestimonialItem 
            key={i}
            name={item.name}
            designation={item.designation}
            company={item.company}
            image={item.image}
            testimonial={item.testimonial}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TestimonialSection
