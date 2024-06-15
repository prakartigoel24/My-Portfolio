import React from 'react';
import '../styles/subpageHero.scss';
import { Link } from 'react-router-dom';

const SubpageHero = ({
heading,
subheading,
btnText,
btnLink,
}) => {

  const spans = Array(30).fill(<span />);

  return (
    <section className={`section_subpage_hero`}>
      {spans}
      <div className="hero_1">
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