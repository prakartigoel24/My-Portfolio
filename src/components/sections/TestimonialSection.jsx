import React from "react";
import "../../styles/testimonial.scss";
import { testimonials } from "../../constants";
import TestimonialItem from "../TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";

const TestimonialSection = () => {
  return (
    <section className="section section_primary section_testimonial">
      <h2>Testimonials</h2>
      <div className="container">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={5}
          slidesPerView={"auto"}
          navigation
          autoplay={{ delay: 1500,disableOnInteraction: false, }}
          loop={true}
        >
          {testimonials.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <TestimonialItem
                  name={item.name}
                  designation={item.designation}
                  company={item.company}
                  image={item.image}
                  testimonial={item.testimonial}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
