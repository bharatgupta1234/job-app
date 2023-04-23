import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  containerClassName?: string;
  errorMessage?: string;
}

function TextInput(props: Props) {
  const {
    id,
    label,
    placeholder,
    required,
    containerClassName,
    errorMessage,
    ...restProps
  } = props;
  return (
    <div className={containerClassName}>
      {label ? (
        <div className="pb-4">
          <label className="font-medium">{label}</label>
          <span className="text-error font-medium">{required ? "*" : ""}</span>
        </div>
      ) : null}
      <input
        id={id}
        className="border border-grey focus:ring-1 focus:ring-blue-300 focus:outline-none w-full rounded-md py-8 pl-12 "
        type="text"
        aria-label="Job title"
        placeholder={placeholder}
        required={required}
        {...restProps}
      />
      {errorMessage && (
        <p className="text-error font-medium text-sm mt-4">{errorMessage}</p>
      )}
    </div>
  );
}

export default TextInput;
