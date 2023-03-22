import React from "react";
type ButtonProps = {
  color?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { color, children, handleClick } = props;
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        onClick={() => handleClick && handleClick()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
