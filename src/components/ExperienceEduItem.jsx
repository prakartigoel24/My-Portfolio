import React from "react";

const ExperienceEduItem = ({
  title,
  company_name,
  points,
  position,
  icon,
  date,
}) => {
  return (
    <div className={`card_container ${position}`}>
      <img src={icon} alt="Company Icon" />
      <div className="experienceEdu_item_card">
        <h3>{company_name}</h3>
        <h4>{title}</h4>
        <small>{date}</small>
        <ul>
          {points.map((point, i) => {
            return <li key={i}>{point}</li>;
          })}
        </ul>
        <span className={`${position}_arrow`}></span>
      </div>
    </div>
  );
};

export default ExperienceEduItem;
