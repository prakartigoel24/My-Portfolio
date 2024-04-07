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
            points={ee_item.points}
            />
          )
        })}
      </div>
    </section>
  );
};

export default ExperienceEduSection;


/* title: "Computer Science Engineering",
company_name: "I.T.S Engineering College",
icon: its,
iconBg: "",
date: "March 2020 - April 2021",
points: [
  "Eagerly learning the fundamentals of programming languages, algorithms, and collaboration.",
  "Actively developing my problem-solving, critical thinking, and communication skills through coursework and group projects.",
  "Recently led a team project to develop a web app for social networking and collaboratiob among peers in college."
]

*/