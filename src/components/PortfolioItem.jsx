import React from "react";

const PortfolioItem = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="portfolio_item">
      <div className="project_cover_image">
        <img src={image} alt="Project Cover Image" />
      </div>
      <div className="portfolio_item_content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="portfolio_item_tech">
          <h4>Technologies: </h4>
          {tags.map((tag, i) => {
            return (
              <h5 style={{ color: tag.color }} key={i}>
                {tag.name}
              </h5>
            );
          })}
        </div>
        <div className="portfolio_item_links">
          <h4>Links: </h4>
          <a href={source_code_link} target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/github.png"
              alt="Github Icon"
              width={36}
              height={36}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

//name, description, tags[{name,color}], image, source_code_link
