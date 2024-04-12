import React from "react";
import SkillItem from "../SkillItem";
import "../../styles/skills.scss";
import { skills } from "../../constants";

const SkillSection = () => {
  return (
    <section className="section section_support section_skills">
      <h2>Skills</h2>
      <div className="container">
        {skills.map((skill,i) => {
          return (
            <SkillItem 
            key={i}
            name={skill.name} icon={skill.icon}/>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
