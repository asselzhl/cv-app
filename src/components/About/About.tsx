import React from "react";

export const About = ({ text }) => {
  return (
    <div data-testid="aboutComponent">
      <p>{text}</p>
    </div>
  );
};
