import { useState } from "react";

interface TextareaProps {
  rows: number;
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

function Textarea({
  rows = 10,
  placeholder = "",
  initialValue = "",
  onChange = () => console.log(""),
  isDisabled = false,
  hasError = false,
  errorMessage = "Error en el input",
}: TextareaProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex flex-col w-full font-semibold">
      <textarea
        rows={rows}
        className={`border py-2 px-4 rounded placeholder-grey focus:outline-none focus:ring-2 shadow-inner
          ${
            hasError
              ? "border-white focus:ring-gray-500"
              : "border-p_ruby-hover dark:border-0 focus:ring-s_yellow dark:focus:ring-gray-800"
          }
          ${isDisabled ? "bg-gray-200" : "bg-p_ruby-disable dark:border-0 dark:bg-grey dark:placeholder-gray-700"} 
          `}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          console.log(event.target.value);
          setValue(event.target.value);
          onChange(event.target.value);
        }}
        disabled={isDisabled}
        name={placeholder}
      />
      {hasError && <p className="text-xs text-white">{errorMessage}</p>}
    </div>
  );
}

export default Textarea;
