import { useState } from "react";

interface InputProps {
  placeholder?: string;
  type: "text" | "password" | "email" | "datetime-local";
  initialValue?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

function Input({
  placeholder = "",
  initialValue = "",
  onChange = () => console.log(""),
  type,
  isDisabled = false,
  hasError = false,
  errorMessage = "Error en el input",
}: InputProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex flex-col w-full font-semibold">
      <input
        className={`border py-2 px-4 rounded focus:outline-none focus:ring-2 shadow-inner
          ${
            hasError
              ? "border-white focus:ring-gray-500"
              : "border-p_ruby-hover dark:border-0 focus:ring-s_yellow dark:focus:ring-gray-800"
          }
          ${
            isDisabled
              ? "bg-gray-800 placeholder-gray-600 border-0"
              : "bg-p_ruby-disable placeholder-grey dark:bg-grey dark:placeholder-gray-700"
          } 
          `}
        type={type}
        name={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          console.log(event.target.value);
          setValue(event.target.value);
          onChange(event.target.value);
        }}
        disabled={isDisabled}
      />
      {hasError && <p className="text-xs text-white">{errorMessage}</p>}
    </div>
  );
}

export default Input;
