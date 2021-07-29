import React from "react";
import { useState } from "react";
import { ITechnologies } from "../../content.config";
import "./Technologies.scss";
import { CONFIG } from "../../content.config";
import FlipMove from "react-flip-move";
interface TechnologiesProps {}

type Category = keyof ITechnologies;

export const Technologies: React.FC<TechnologiesProps> = ({}) => {
  const [display, setDisplay] = useState<Category>("backend");
  const { technologies } = CONFIG;
  const categoriesArray = (): Category[] => {
    let arr: Category[] = [];
    for (let key in technologies) arr.push(key as Category);
    return arr;
  };
  const handleChangeDisplay = (category: Category) => {
    setDisplay(category);
  };
  return (
    <div className="techonologies-wrapper">
      <h1>ТЕХНОЛОГИИ</h1>
      <div className="technologies-container">
        <div className="selector-container">
          {categoriesArray().map((category, index) => {
            const isActive = !!(display === category);
            const activeClass = isActive ? "active" : "";
            return (
              <button
                key="index"
                onClick={() => handleChangeDisplay(category)}
                className={`selector-btn ${activeClass}`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <hr className="selector-separator" />
        <div className="items-container">
          <FlipMove
            typeName={null}
            enterAnimation="fade"
            leaveAnimation="fade"
            maintainContainerHeight
          >
            {technologies[display].map(({ name, icon, url }, index) => {
              return (
                <div key={index} className="item-container">
                  <a href={url} target="_blank">
                    <img src={icon} className="item-logo" />
                  </a>
                  {name}
                </div>
              );
            })}
          </FlipMove>
        </div>
      </div>
    </div>
  );
};
