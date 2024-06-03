import React from "react";
import { EducationTimeline } from "./EducationTimeline";
import { educationList } from "../../helpers/lists/educationList";

const style = {
  wrapper: `h-[30vh] overflow-scroll`,
};

export const Education = () => {
  return (
    <div className={style.wrapper}>
      {educationList.map((education) => {
        return (
          <EducationTimeline key={education.title} education={education} />
        );
      })}
    </div>
  );
};
