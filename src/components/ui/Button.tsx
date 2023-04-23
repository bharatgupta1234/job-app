import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  secondary?: boolean;
  containerClassName?: string;
}

const Button = (props: Props) => {
  const {
    name,
    secondary = false,
    containerClassName = "",
    ...restProps
  } = props;

  const className = secondary
    ? "bg-white text-primary border border-primary"
    : "bg-primary text-white";

  return (
    <button
      className={`${className} font-medium py-8 px-16 rounded ${containerClassName}`}
      {...restProps}
    >
      {name}
    </button>
  );
};

export default Button;
