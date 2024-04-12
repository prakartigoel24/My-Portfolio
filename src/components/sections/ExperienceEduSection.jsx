import React from "react";
import "../../styles/experienceEdu.scss";
import {education_experience} from '../../constants';
import ExperienceEduItem from "../ExperienceEduItem";

const ExperienceEduSection = () => {
  return (
    <section className="section section_support section_experienceEdu">
      <h2>Experience & Education</h2>
      <div className="container">
        {education_experience.map((ee_item, i)=>{
         return(
            <ExperienceEduItem
            key={i}
            title={ee_item.title}
            company_name={ee_item.company_name}
            date={ee_item.date}
            icon={ee_item.icon}
            points={ee_item.points}
            position={i%2 === 0 ? "left" : "right"}
            />
          )
        })}
      </div>
    </section>
  );
};

export default ExperienceEduSection;
