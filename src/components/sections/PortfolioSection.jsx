import React from "react";
import { projects } from "../../constants";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = ({ isSubsection }) => {
  let newprojects = projects;
  if (isSubsection) {
    newprojects = projects.slice(0, 4);
  }

  return (
    <section className="section section_primary section_portfolio">
      <h2>Portfolio</h2>
      <div className="container">
        {newprojects.map((project, i) => {
          return <PortfolioItem 
          key={i}
          name={project.name}
          description={project.description}
          tags={project.tags}
          image={project.image}
          source_code_link={project.source_code_link} />;
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;

//name, description, tags[{name,color}], image, source_code_link
