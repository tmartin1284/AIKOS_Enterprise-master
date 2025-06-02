import React from "react";
import "@fontsource/outfit";
import ContenedorCardServicios from "~/componentes/contenedorCardServicios/ContenedorCardServicios";

const serviciosList = [
  {
    titulo: "Servicio 1",
    descripcion: "Descripcion del servicio 1",
    servicios: ["1", "2", "3"],
  },
  {
    titulo: "Servicio 2",
    descripcion: "Descripcion del servicio 2",
    servicios: ["1", "2", "3"],
  },
  {
    titulo: "Servicio 3",
    descripcion: "Descripcion del servicio 3",
    servicios: ["1", "2", "3"],
  },
  {
    titulo: "Servicio 4",
    descripcion: "Descripcion del servicio 4",
    servicios: ["1", "2", "3"],
  },
];

function services() {
  return (
    <>
      <h1 className="my-12 font-extrabold text-center text-h1 leading-h1">
        services
      </h1>
      <div className="my-18 servicesText">
      <p className="text-regular leading-regular">
        En Aiko’s Enterprise, creemos en el poder de la creatividad y la
        innovación digital para transformar marcas y llevarlas al siguiente
        nivel. Nuestro objetivo es ofrecer soluciones publicitarias integrales
        que ayuden a empresas y emprendedores a destacar en un entorno
        competitivo.
        <br />
        <br />
        Diseñamos estrategias personalizadas que combinan creatividad,
        tecnología y análisis de mercado para maximizar su impacto. Nos
        enfocamos en construir identidades sólidas, mejorar la visibilidad
        online y generar conexiones auténticas con la audiencia. Más que
        publicidad, creamos experiencias que impulsan el crecimiento y el éxito
        de cada negocio.
        <br />
        <br />
        We also love monkeys. So much… 🐒❤️
      </p>
      </div>
      <ContenedorCardServicios
        CardServicios={
          serviciosList
          // <CardServicio titulo="Servicio 1" descripcion="Descripcion del servicio 1" servicios={["1", "2", "3"]}/>,
          // <CardServicio titulo="Servicio 2" descripcion="Descripcion del servicio 2" servicios={["1", "2", "3"]}/>,
          // <CardServicio titulo="Servicio 3" descripcion="Descripcion del servicio 2" servicios={["1", "2", "3"]}/>
        }
      />
    </>
  );
}

export default services;
