import React from "react";
import type { cardContactoVariant } from "~/types/types";

interface CardContactoProps {
  icono: string;
  texto: string;
}

function CardContacto({ icono, texto}: CardContactoProps) {

  return (
    <div className={`flex flex-col items-center gap-4 p-4 border-4 rounded-2xl dark:bg-white dark:text-black`}>
      <img src={icono} alt="" className="w-10" />
      <p className="text-regular">{texto}</p>
    </div>
  );
}

export default CardContacto;
