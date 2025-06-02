import React from "react";
import "@fontsource/outfit";
import ThemeToggle from "~/componentes/ThemeToggle";
import { Form } from "react-router";
import Formulario from "~/componentes/Formulario";
import CardContacto from "~/componentes/CardContacto";

function contact() {
  return (
    <>
      <h1 className="my-12 font-extrabold text-center text-h1 leading-h1">
        contact
      </h1>
      <div className="grid gap-12 mt-22 md:grid-cols-2 formularioSection">
        <div className="flex flex-col justify-between p-8 hablemosSection">
          <h2 className="mb-12 font-extrabold text-center text-h2 leading-h2">
            Hablemos
          </h2>
          <p className="text-regular leading-regular">
            En Aiko’s Enterprise, estamos listos para ayudarte a llevar tu marca
            al siguiente nivel.
            <br />
            <br />
            Si necesitas diseño gráfico, desarrollo web, estrategias de
            marketing digital o simplemente quieres hablar sobre lo increíble
            que son los monos 🐒, estamos aquí para escucharte.
            <br />
            <br />
            Déjanos tu mensaje y nos pondremos en contacto contigo lo antes
            posible. ¡Hagamos algo increíble juntos!
          </p>
          <div className="grid grid-cols-1 gap-12 my-12 cardContactoSection xl:grid-cols-2">
            <CardContacto
              icono={"iconos/Contacto/phone-volume-solid2.svg"}
              texto="+34 612 345 678"
            />
            <CardContacto
              icono={"iconos/Contacto/correo2.svg"}
              texto="correo@correo.es"
            />
          </div>
        </div>
        <Formulario />
      </div>
      <div className="flex flex-col-reverse gap-12 md:grid mt-22 md:grid-cols-2 mapaSection">
        <div className="col-span-1 mapaFrame sda">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12681.449200103261!2d-5.982790386748807!3d37.38126340152925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126ea2cacd2d3d%3A0xaccd0a6c7b6b9733!2sNervi%C3%B3n%2C%20El%20Cerro%20del%20%C3%81guila%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1740425343114!5m2!1ses!2ses"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
              className="w-full h-full"
            ></iframe>
        </div>
        <div className="p-8 hablemosSection">
          <h2 className="mb-12 font-extrabold text-center text-h2 leading-h2">
          Dónde encontrarnos?
          </h2>
          <p className="text-regular leading-regular">
          Nos ubicamos en un lugar donde las ideas fluyen   🌍✨
            <br />
            <br />
            Dirección: 123  Avenue Monkey Island, Galaxy 42 🐒
            <br />
            <br />
            Aunque nuestro equipo trabaja desde distintos puntos del mundo, estamos siempre conectados y listos para ayudarte. ¡Contáctanos y hagamos que tu marca brille!
          </p>
        </div>
      </div>
    </>
  );
}

export default contact;
