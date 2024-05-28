import React from "react";

const style = {
  pageButton: `uppercase bg-[#002147] text-white rounded py-[10px] px-[20px] hover:bg-[#009E60] duration-300`,
};

export const Button = ({ text }) => {
  return <button className={style.pageButton}>{text}</button>;
};
