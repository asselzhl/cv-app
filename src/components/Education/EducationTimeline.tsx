import React from "react";

interface EducationItem {
  date: number;
  title: string;
  description: string;
}
interface EducationItemProps {
  education: EducationItem;
}

// TODO
export const EducationTimeline = ({ education }: EducationItemProps) => {
  return (
    <div>
      <span>{education.date}</span>
      <span>{education.title}</span>
      <span>{education.description}</span>
    </div>
  );
};
