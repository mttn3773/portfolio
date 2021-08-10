import React from "react";
import { config } from "../../content";
import "./About.scss";
interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  const {
    about: { text, traits },
  } = config;
  return (
    <div className="about-container">
      <h1> ОБО МНЕ </h1>
      <div className="text-container">
        <p>{text}</p>
      </div>
      <div className="traits-container">
        {traits.map(({ name, items, img }, index) => (
          <div key={index} className="trait">
            <object data={img}>{name}</object>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
