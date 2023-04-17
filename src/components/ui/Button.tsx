import React from "react";

interface Props {
  onPress: () => void;
  name: string;
  secondary?: boolean;
  containerClassName?: string;
}

const Button = ({
  name,
  onPress,
  secondary = false,
  containerClassName = "",
}: Props) => {
  const className = secondary
    ? "bg-white text-primary border border-primary"
    : "bg-primary text-white";

  return (
    <button
      onClick={onPress}
      className={`${className} font-medium py-8 px-16 rounded ${containerClassName}`}
    >
      {name}
    </button>
  );
};

export default Button;
