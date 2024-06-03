import React from "react";

const style = {
  wrapper: `bg-white absolute top-0 left-0 h-full border p-5 opacity-90`,
  title: `font-bold text-[#009E60] mb-2`,
  link: `text-[#009E60] underline`,
};

interface ProjectInfo {
  title: string;
  description: string;
  link: string;
}

interface PortfolioInfoProps {
  info: ProjectInfo;
}

export const PortfolioInfo = ({ info }: PortfolioInfoProps) => {
  return (
    <div className={style.wrapper}>
      <h4 className={style.title}>{info.title}</h4>
      <p>{info.description}</p>
      <a href={info.link} className={style.link}>
        View source
      </a>
    </div>
  );
};
