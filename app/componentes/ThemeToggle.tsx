import { useDarkMode } from "../hooks/useDarkMode";// Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 text-white border-white rounded-lg cursor-pointer bg-plight_ruby dark:bg-black dark:text-white border-3"
    >
      {theme === "light" ? (
        <>
          <img src="iconos\iconoBoton\sun-solid.svg" className="w-8 h-8" />
        </>
      ) : theme === "dark" ? (
        <>
          <img src="iconos\iconoBoton\moon-solid.svg" className="w-8 h-8" />
        </>
      ) : (
        <>
          <img src="iconos\iconoBoton\desktop-solid.svg" className="w-8 h-8" />
        </>
      )}
    </button>
  );
}
