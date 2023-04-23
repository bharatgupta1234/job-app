import React, { useCallback } from "react";

export interface OptionType {
  label: string;
  id: string;
}

interface Props {
  selected: boolean;
  value: OptionType;
  containerClassName?: string;
  onToggle(value: OptionType): void;
}

const Option = ({
  selected,
  onToggle,
  value,
  containerClassName = "",
}: Props) => {
  const handleToggle = useCallback(() => {
    onToggle(value);
  }, [onToggle, value]);

  return (
    <div
      className={`flex items-center ${containerClassName}`}
      onClick={handleToggle}
    >
      <div
        className={`w-20 h-20 rounded-full border-2 border-grey ${
          selected ? "bg-grey" : ""
        }`}
      />
      <p className="text-placeholder ml-4">{value.label}</p>
    </div>
  );
};

export default Option;
