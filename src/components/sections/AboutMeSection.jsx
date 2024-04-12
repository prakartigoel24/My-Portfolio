import React from "react";

const AboutMeSection = () => {
  return (
    <section className="section section_support section_about_me">
      <div className="container">
        <img src="/images/my_avatar-bg-removed.png" alt="" />
        <p>
          Hello, I'm Prakarti Goel, a passionate software engineer with a knack
          for coming up with ideas to everyday problems to make lives easier.
          <br /> <br /> I specialize in using modern technologies such as
          <span> React.js, Express.js and Next.js. </span> I also have knowledge
          of <span> Python, C++, SCSS, Tailwind, and working with APIs.</span>{" "}
          <br />
          <br />I have interned at
          <span> Microsoft as a Software Engineer Intern </span> and have been a{" "}
          <span>co-founder and programming lead </span> of the{" "}
          <span>technical society </span>at my college, I.T.S. Engineering
          College, Gr.Noida.
          <br /> <br /> In my free time, I enjoy reading fiction books and
          exploring new ideas and perspectives.
        </p>
        <a
          href="https://drive.google.com/file/d/1FzGCbb4DzkMUBNZIa949X_H0mzAzjY9o/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn_accent"
        >
          RESUME
        </a>
      </div>
    </section>
  );
};

export default AboutMeSection;
