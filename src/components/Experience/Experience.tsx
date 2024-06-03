import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { experienceList } from "../../helpers/lists/experienceList";

const style = {
  wrapper: `flex flex-col gap-y-8`,
};

export const Experience = () => {
  return (
    <div className={style.wrapper}>
      {experienceList.map((job) => {
        return <ExperienceItem key={job.date} job={job} />;
      })}
    </div>
  );
};
