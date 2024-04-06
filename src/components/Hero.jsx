import "../styles/hero.scss";
import React from "react";

const Hero = () => {
  return (
    <section className="section section_hero">
      <div className="hero_1">
        <p>Hello, I am</p>
        <h1>PRAKARTI GOEL</h1>
      </div>
      <div className="hero_2">
        <img
          src="/images/my_avatar.jpg"
          alt="Prakarti's Avatar"
        />
      </div>
      <div className="hero_3">
        <p>
          From India. A passionate <span>learner</span> , <span>coder </span>{" "}
          and <span>developer.</span>
        </p>
        <a
          href="https://drive.google.com/file/d/1FzGCbb4DzkMUBNZIa949X_H0mzAzjY9o/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn_accent"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
