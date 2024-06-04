import React from "react";
import { ExperienceItem } from "./ExperienceItem";

const style = {
  wrapper: `flex flex-col gap-y-8`,
};

interface ExperienceInfo {
  company: string;
  title: string;
  description: string;
}
interface ExperienceListItem {
  date: string;
  info: ExperienceInfo;
}
interface ExperienceProps {
  experienceList: ExperienceListItem[];
}

export const Experience = ({ experienceList }: ExperienceProps) => {
  return (
    <div className={style.wrapper} data-testid="experience-list">
      {experienceList.map((job) => {
        return <ExperienceItem key={job.date} job={job} />;
      })}
    </div>
  );
};
