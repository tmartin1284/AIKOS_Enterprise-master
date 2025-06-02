import Boton from "./Boton";
import Input from "./Input";
import InputDateTime from "./InputDateTime";
import Textarea from "./Textarea";

function Formulario() {
  return (
    <form className="self-center w-full p-8 text-white border-2 border-white rounded-2xl dark:border-grey">
      <h3 className="mb-6 font-bold text-h3 leading-h3">Tu información</h3>
      <div className="flex flex-col items-center justify-between gap-8">
        <InputDateTime />
        <Input type="text" placeholder="Nombre *" />
        <Input type="text" placeholder="Apellidos *"/>
        <Input
          type="text"
          placeholder="Direccion *"
        />
        <Textarea rows={8} placeholder="¿En qué podemos ayudar?" />
        <Boton text="Enviar" variant="blanco2" ancho="40%" />
      </div>
    </form>
  );
}

export default Formulario;
