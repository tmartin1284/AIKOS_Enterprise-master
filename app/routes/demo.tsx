import React from 'react'
import Boton from '~/componentes/Boton'
import CardContacto from '~/componentes/CardContacto'
import CardServicio from '~/componentes/contenedorCardServicios/CardServicio'
import DisplayComponente from '~/componentes/DisplayComponente'
import Formulario from '~/componentes/Formulario'
import Input from '~/componentes/Input'
import InputDateTime from '~/componentes/InputDateTime'
import Logo from '~/componentes/Logo'
import Textarea from '~/componentes/Textarea'
import ThemeToggle from '~/componentes/ThemeToggle'
import Footer from '~/layouts/Footer'
import Header from '~/layouts/Header'

function demo() {
  return (
    <>
    <h2 className="pt-16 text-5xl font-extrabold text-center text-white">COMPONENTES</h2>
    <DisplayComponente
      key={1}
      nombre="Logo"
      componentes={[
        <Logo variant="negro" width="40%" />,
        <Logo variant="ruby" width="40%" />,
      ]}
      descripcion="Logo corporativo"
    />

    <DisplayComponente
      key={2}
      nombre="Footer"
      componentes={[<Footer />, <Footer footerVariant="transparente"/>]}
      descripcion="Footer"
      flexDireccion="col"
    />

    <DisplayComponente
      key={3}
      nombre="Boton"
      componentes={[
        <Boton key={1} variant="aikos" text="aiko's" />,
        <Boton key={2} variant="blanco" imagen="iconos/bars-solid.svg" />,
        <Boton key={3} variant="ruby" text="boton" />,
        <Boton key={4} variant="blanco2" text="Enviar" />,
        <Boton key={5} variant="negro" text="boton" />,
      ]}
      descripcion="Boton"
    />

    <DisplayComponente key={5} nombre="Header" componentes={[<Header />]} />

    <DisplayComponente
      key={6}
      nombre="Input"
      componentes={[<Input type={"text"} placeholder="Nombre *" />]}
    />

    <DisplayComponente
      key={7}
      nombre="InputDatetime"
      componentes={[<InputDateTime />]}
    />

    <DisplayComponente
      key={8}
      nombre="Textarea"
      componentes={[
        <Textarea rows={8} placeholder="¿En qué podemos ayudar?" />,
      ]}
    />

    <DisplayComponente
      key={9}
      nombre="Formulario"
      componentes={[<Formulario />]}
    />

    <DisplayComponente
      key={10}
      nombre="Card Contacto"
      componentes={[
        <CardContacto
          icono={"iconos/Contacto/phone-volume-solid.svg"}
          texto="+34 612 345 678"
        />,
        <CardContacto
          icono={"iconos/Contacto/correo2.svg"}
          texto="correo@correo.es"
        />,
      ]}
    />

    <DisplayComponente
      key={11}
      nombre="Card Servicio"
      flexDireccion="col"
      gap={0}
      componentes={[
        <CardServicio
          key={1}
          titulo="Servicio 1"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus leo odio, lobortis sagittis enim bibendum vel. In ac vehicula nunc. Nullam tincidunt nec lacus vitae porttitor. Maecenas eu vulputate purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dignissim sagittis accumsan. Curabitur facilisis turpis non fermentum posuere."
          servicios={["Servicio 1", "Servicio 2", "Servicio 3"]}
        />,
        <CardServicio
          key={2}
          titulo="Servicio 2"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus leo odio, lobortis sagittis enim bibendum vel. In ac vehicula nunc. Nullam tincidunt nec lacus vitae porttitor. Maecenas eu vulputate purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dignissim sagittis accumsan. Curabitur facilisis turpis non fermentum posuere."
          servicios={["Servicio 1", "Servicio 2", "Servicio 3"]}
        />,
        <CardServicio
          key={3}
          titulo="Servicio 3"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus leo odio, lobortis sagittis enim bibendum vel. In ac vehicula nunc. Nullam tincidunt nec lacus vitae porttitor. Maecenas eu vulputate purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dignissim sagittis accumsan. Curabitur facilisis turpis non fermentum posuere."
          servicios={["Servicio 1", "Servicio 2", "Servicio 3"]}
        />,
      ]}
    />

    <DisplayComponente
      key={12}
      nombre="Toggle Theme"
      componentes={[
        <ThemeToggle />
      ]}
    />
  </>
  )
}

export default demo