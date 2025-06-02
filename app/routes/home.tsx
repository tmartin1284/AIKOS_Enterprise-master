
import type { Route } from "./+types/home";
import Logo from "~/componentes/Logo";
import DisplayComponente from "~/componentes/DisplayComponente";
import Boton from "~/componentes/Boton";
import "@fontsource/outfit";
import Header from "~/layouts/Header";
import Input from "~/componentes/Input";
import InputDateTime from "~/componentes/InputDateTime";
import Textarea from "~/componentes/Textarea";
import Formulario from "~/componentes/Formulario";
import CardContacto from "~/componentes/CardContacto";
import CardServicio from "~/componentes/contenedorCardServicios/CardServicio";
import Footer from "~/layouts/Footer";
import ThemeToggle from "~/componentes/ThemeToggle";
import Carrousel from "~/componentes/carrousel/Carrousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIKO's Enterprise" },
    { name: "description", content: "Welcome to aiko's" },
  ];
}

export default function Home() {
  return (
    <div className="h-100">
      {/* <Carrousel/> */}
    </div>
  );
}
