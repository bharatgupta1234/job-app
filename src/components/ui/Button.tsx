import React from "react";

interface Props {
  onPress: () => void;
  name: string;
  secondary?: boolean;
}

const Button = ({ name, onPress, secondary = false }: Props) => {
  return (
    <button
      onClick={onPress}
      className="bg-primary text-white font-bold py-8 px-16 rounded"
    >
      {name}
    </button>
  );
};

export default Button;
