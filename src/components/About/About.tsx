import React from "react";
import "./About.scss";
interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="about-container">
      <h1> ОБО МНЕ </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam
        est autem quas dolores repellat vel beatae eaque eligendi eveniet alias
        consequuntur commodi quos voluptatem iusto, iste sed debitis
        necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Illum magnam est autem quas dolores repellat vel beatae eaque
        eligendi eveniet alias consequuntur commodi quos voluptatem iusto, iste
        sed debitis necessitatibus. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Illum magnam est autem quas dolores repellat vel
        beatae eaque eligendi eveniet alias consequuntur commodi quos voluptatem
        iusto, iste sed debitis necessitatibus.
      </p>
    </div>
  );
};
