import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

type ButtonMapKeys = "knowMore" | "goBack";
interface ButtonMapValues {
  text: string;
  style: string;
  icon?: JSX.Element;
}

const buttonMap: Record<ButtonMapKeys, ButtonMapValues> = {
  knowMore: {
    text: "know more",
    style:
      "uppercase bg-[#009E60] text-white rounded py-[10px] px-[20px] hover:bg-[#002147] duration-300",
  },
  goBack: {
    text: "Go back",
    style:
      "text-white flex items-center gap-x-2.5 hover:bg-[#009E60] duration-300 rounded py-[10px] px-[20px]",
    icon: <FaAngleLeft />,
  },
};

export const Button = ({ buttonConfig }) => {
  const config: ButtonMapValues = buttonMap[buttonConfig];
  return (
    <button className={config.style}>
      {config.icon}
      <span>{config.text}</span>
    </button>
  );
};
