import React from "react";
import { buttonStyle } from "../../helpers/buttonStylesMap";

type ButtonTypes = "button" | "submit" | "reset";

interface ButtonProps {
  text: string;
  icon?: JSX.Element;
  type?: ButtonTypes;
  styleKey?;
  disabled?;
  onClick?: () => void;
}

export const Button = ({
  text,
  icon,
  type = "button",
  styleKey = "default",
  disabled,
  onClick,
}: ButtonProps) => {
  const styleConfig = buttonStyle[styleKey];
  return (
    <button
      className={styleConfig.button}
      type={type}
      onClick={onClick}
      data-testid="button"
      disabled={disabled}
    >
      {icon}
      <span className={styleConfig.span}>{text}</span>
    </button>
  );
};
