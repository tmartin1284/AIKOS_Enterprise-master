import { motion } from "framer-motion";
import { useState } from "react";

interface CardServicioProps {
  titulo: string;
  descripcion: string;
  servicios: string[];
}

function CardServicio({ titulo, descripcion, servicios }: CardServicioProps) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col w-full cursor-pointer"
          onClick={() => setShowCard(!showCard)}>
      <div
        className={`text-plight_rubyhover dark:text-black w-full py-6 lg:px-12 px-4 flex justify-between items-center transition-all duration-300 ease-in-out
            ${showCard ? " bg-plight_rubyhover  dark:bg-grey text-white" : "bg-white "}
            `}
      >
        <h2 className="text-2xl font-extrabold lg:text-5xl">{titulo}</h2>
        <div
          className="w-12 text-white "
        >
          <img
            src="iconos/plus-solid.svg"
            alt=""
            className={`stroke-white stroke-2 transition-all duration-300 ease-in-out lg:w-12 lg:h-12 w-full h-8
                    ${showCard ? "rotate-45" : ""}
                    `}
          />
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: showCard ? "auto" : 0, opacity: showCard ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full px-4 overflow-hidden shadow-lg bg-plight_rubyhover dark:bg-grey md:px-12"
      >
        <div className="flex flex-col w-full gap-4 py-8 text-white dark:text-black md:grid md:grid-cols-4 ">
          <p className="flex flex-col justify-center col-span-2">
            {descripcion}
          </p>
          <ul className="flex flex-col justify-center col-span-1 col-start-4 gap-1">
            {servicios.map((servicio, index) => (
              <li key={index} className="text-center md:text-end">
                {servicio}
              </li>
            ))}
          </ul>
          <a href="" className=" text-s_yellow dark:text-plight_ruby">
            Know more...
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default CardServicio;
