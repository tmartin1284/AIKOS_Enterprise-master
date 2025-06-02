type variant = "blanco" | "blanco2" | "negro" | "ruby" | "aikos";

interface ButtonProps {
  text?: string;
  variant?: variant;
  imagen?: string;
  onClick?: (text: string) => void;
  ancho?: string;
}

function Button({
  text,
  variant = "ruby",
  onClick,
  imagen,
  ancho,
}: ButtonProps) {
  const variants: Record<variant, string> = {
    blanco: "px-2 text-black bg-white hover:bg-grey h-full self-stretch ",
    blanco2: "px-12 text-plight_ruby dark:text-black bg-white hover:bg-plight_rubyhover dark:hover:bg-pdark_smokehover hover:text-white rounded-2xl",
    negro: "px-4 text-white bg-black hover:bg-stone-900 rounded-xl",
    ruby: "px-4 text-white bg-plight_ruby hover:bg-plight_ruby-hover rounded-xl",
    aikos: "px-6 text-2xl text-black bg-white hover:text-white hover:bg-black  rounded-xl",
  };

  return (
    <button
      className={`self-center font-bold py-2 hover:cursor-pointer ${variants[variant]} flex items-center justify-center w-[${ancho}]`}
      onClick={() => {}}
    >
      {imagen && <img src={imagen} alt={text} className="w-8 h-8" />}
      {text}
    </button>
  );
}

export default Button;
