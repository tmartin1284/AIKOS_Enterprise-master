import React, { useState, type JSX } from 'react'
import CardServicio from '~/componentes/contenedorCardServicios/CardServicio'
import type { CardServicioType } from '~/types/types';

interface ContenedorCardServiciosProps {
  CardServicios: CardServicioType[],
}

function ContenedorCardServicios({CardServicios}: ContenedorCardServiciosProps) {
    const [openCard, setOpenCard] = useState(false);

    function changeState() {
        openCard ? setOpenCard(false) : setOpenCard(true);
    }
    
    return (
        <div>
            {CardServicios.map((card, index) => (
                <CardServicio 
                    key={index}
                    titulo={card.titulo} 
                    descripcion={card.descripcion} 
                    servicios={card.servicios}
                /> 
            ))}     
        </div>
    )
}

export default ContenedorCardServicios