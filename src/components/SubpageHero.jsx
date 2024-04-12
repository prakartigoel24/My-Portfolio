import React from 'react';
import '../styles/subpageHero.scss';
import { Link } from 'react-router-dom';

const SubpageHero = ({
heading,
subheading,
backgroundImg,
btnText,
btnLink,
}) => {
  return (
    <section className={`section section_subpage_hero ${backgroundImg}`}>
      <div className="hero_1">
        {/* <p>Hello, I am</p> */}
        <h1>{heading}</h1>
      </div>
      <div className="hero_2">
        <p>
          {subheading}
        </p>
        <Link
          to={btnLink}
          className="btn_accent"
        >
          {btnText}
        </Link>
      </div>
    </section>
  )
}

export default SubpageHero