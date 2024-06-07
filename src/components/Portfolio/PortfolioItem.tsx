import React, { useState } from "react";
import { PortfolioInfo } from "./PortfolioInfo";

type ProjectType = "ui" | "code";

interface ProjectInfo {
  title: string;
  description: string;
  link: string;
}

interface ProjectsItem {
  imgSrc: string;
  type: ProjectType;
  info: ProjectInfo;
}

interface PortfolioItemProps {
  project: ProjectsItem;
}

export const PortfolioItem = ({ project }: PortfolioItemProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  // just :hover pseudo-class
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <li
      className={`filter-item ${project.type}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && <PortfolioInfo info={project.info} />}
      <img src={project.imgSrc} alt={project.info.title} />
    </li>
  );
};
