import React from "react";

const style = {
  line: `bg-[#667081] w-full h-[1px]`,
};

export const Scale = () => {
  return (
    <div>
      <div className={style.line}></div>
      <ul className="flex">
        <li className="basis-[25%]">Beginner</li>
        <li className="basis-[25%]">Proficient</li>
        <li className="basis-[25%] text-center">Expert</li>
        <li className="basis-[25%] text-right">Master</li>
      </ul>
    </div>
  );
};
