import React, { useCallback, useState } from "react";
import Option, { OptionType } from "./Option";

interface Props {
  label: string;
  options: OptionType[];
  onChange(selectedId: string): void;
  containerClassName?: string;
}

const Group = ({
  options,
  onChange,
  label,
  containerClassName = "",
}: Props) => {
  const [selectedId, setSelectedId] = useState<string>("");

  const onToggle = useCallback(
    (value: OptionType) => {
      setSelectedId(value.id);
      onChange(selectedId);
    },
    [onChange, selectedId]
  );

  return (
    <div className={containerClassName}>
      <p className="font-medium mb-12">{label}</p>
      <div className="flex">
        {options.map((option) => (
          <Option
            containerClassName="mr-16"
            selected={option.id === selectedId}
            value={option}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
