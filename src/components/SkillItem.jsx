import React from "react";

const SkillItem = ({name, icon}) => {
  return (
    <div className="skill_item">
      <p>{name}</p>
      <img src={icon} alt={`Icon for ${name}`} />
    </div>
  );
};

export default SkillItem;
