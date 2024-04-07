import React from 'react'

const ExperienceEduItem = ({title,company_name, points}) => {
  return (
    <div className='experienceEdu_item_card'>
        <h3>{company_name}</h3>
        <h4>{title}</h4>
        <ul>
            {points.map((point,i)=>{
                return(
                    <li key={i}>{point}</li>
                )
            })}
        </ul>
        
    </div>
  )
}

export default ExperienceEduItem