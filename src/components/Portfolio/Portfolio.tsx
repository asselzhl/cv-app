import React from "react";

import { PortfolioItem } from "./PortfolioItem";
import { FilterKeysItem, ProjectsItem } from "../../helpers/lists/projectsList";
import { Button } from "../Button/Button";
import { useIsotope } from "./hooks/useIsotope";

const style = {
  filterKeysWrapper: `mb-5 flex gap-x-3`,
  filterKey: `cursor-pointer bg-[#009E60] text-white rounded-full py-1 px-4`,
  projectsList: `filter-container ml-[-10px]`,
};

interface PortfolioProps {
  projectsList: ProjectsItem[];
  filterKeys: FilterKeysItem[];
}

export const Portfolio = ({ projectsList, filterKeys }: PortfolioProps) => {
  const { handleFilterKeyChange } = useIsotope();

  return (
    <div>
      <div className={style.filterKeysWrapper}>
        {filterKeys.map((filterKey) => {
          return (
            <Button
              key={filterKey.key}
              text={filterKey.tag}
              onClick={handleFilterKeyChange(filterKey.key)}
              styleKey="rounded"
            />
          );
        })}
      </div>

      <ul className={style.projectsList} data-testid="projects-list">
        {projectsList.map((project) => {
          return <PortfolioItem key={project.info.title} project={project} />;
        })}
      </ul>
    </div>
  );
};
