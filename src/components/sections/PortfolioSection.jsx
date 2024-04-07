import React, { useState } from "react";
import "../../styles/portfolio.scss";
import { projects } from "../../constants";
import PortfolioItem from "../PortfolioItem";
import { Link } from "react-router-dom";

const PortfolioSection = ({ isSubsection }) => {

  const [techValue, setTechValue] = useState("reactjs");

  let newprojects = projects;

  if (isSubsection) {
    newprojects = projects.slice(0, 4);
  }

  if(!isSubsection)
  {
    newprojects = newprojects.filter((project) => {
      return project.tags.some((tag) => tag.name === techValue.toLowerCase());
    });
  }
  const techs = [
    "ReactJS",
    "ExpressJS",
    "Python",
    "Redux",
    "Tailwind",
    "SCSS",
    "NextJS",
  ];
  return (
    <section className="section section_primary section_portfolio">
      <h2>Portfolio</h2>
      <div className="container">
        { !isSubsection && <div className="project_filter">
          <h4>Filter: </h4>
          <select id="project_filter_options"  onChange={(e)=> setTechValue(e.target.value)}
          value={techValue}>
            {techs.map((tech,i) => {
              return <option key={i} value={tech}>{tech}</option>;
            })}
          </select>
        </div>}
        {newprojects.map((project, i) => {
          return (
            <PortfolioItem
              key={i}
              name={project.name}
              description={project.description}
              tags={project.tags}
              image={project.image}
              source_code_link={project.source_code_link}
            />
          );
        })}
        <Link to="/portfolio" className="btn_accent">See complete portfolio</Link>
      </div>
    </section>
  );
};

export default PortfolioSection;

//name, description, tags[{name,color}], image, source_code_link
