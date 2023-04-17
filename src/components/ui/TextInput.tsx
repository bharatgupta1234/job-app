import React from "react";

interface Props {
  label?: string;
  placeholder?: string;
  required?: boolean;
  containerClassName?: string;
}

function TextInput({
  label,
  placeholder,
  required = false,
  containerClassName = "",
}: Props) {
  return (
    <div className={containerClassName}>
      {label ? (
        <div className="pb-4">
          <label>{`${label}${required ? "*" : ""}`}</label>
        </div>
      ) : null}
      <input
        className="border border-grey focus:ring-1 focus:ring-blue-300 focus:outline-none w-full rounded-md py-8 pl-12 "
        type="text"
        aria-label="Job title"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
