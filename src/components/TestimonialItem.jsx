import React from "react";

const TestimonialItem = ({
  name,
  designation,
  company,
  image,
  testimonial,
}) => {
  return (
    <swiper-slide>
      <div className="testimonial_item">
        <div className="testimonial_img">
          <img src={image} alt="Person's image" />
          <h4>{name}</h4>
          <h5>{`${designation} at ${company}`}</h5>
        </div>

        <p>{testimonial}</p>
      </div>
    </swiper-slide>
  );
};

export default TestimonialItem;
