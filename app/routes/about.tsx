import "@fontsource/outfit";
import ContenedorCardServicios from "~/componentes/contenedorCardServicios/ContenedorCardServicios";

function about() {
  return (
    <>
    <h1 className="my-12 font-extrabold text-center text-h1 leading-h1">
      about us
    </h1>
      <div className="presentationSection">
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
          publicidad, creamos experiencias que impulsan el crecimiento y el
          éxito de cada negocio.
          <br />
          <br />
          We also love monkeys. So much… 🐒❤️
        </p>
      </div>
      <div className="teamSection">
        <h2 className="my-12 font-extrabold text-center text-h2 leading-h2">
          team
        </h2>
        <div className="flex flex-col gap-18">
          <div className="flex flex-col gap-12 md:flex-row presentationCard">
            <img src="public\aboutUsImg\portraitMarcos.png" alt="" />
            <div className="flex flex-col justify-between presentationCardText">
              <h3 className="font-extrabold text-h3 leading-h3">Marcos - Macaco del mes</h3>
              <p className="text-regular leading-regular">
                Apasionado del diseño y el desarrollo front-end, Marcos combina
                creatividad y código para crear interfaces atractivas y
                funcionales.
                <br />
                <br />
                macaco dormido, macaco dormido
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:flex-row presentationCard">
          <img src="public\aboutUsImg\portraitAitor.png" alt="" />
            <div className="flex flex-col justify-between text-start presentationCardText">
              <h3 className="font-extrabold text-h3 leading-h3">Aitor - Macaco del mes</h3>
              <p className="text-regular leading-regular">
              Como fullstack, Aitor domina tanto el front-end como el back-end, construyendo soluciones completas con eficiencia y precisión.
                <br />
                <br />
                macaco estafado por el psoe
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="normalDaySection">
        <h2 className="my-12 font-extrabold text-center text-h2 leading-h2">
          Un día normal en nuestras oficinas...
        </h2>
        <div className="mt-6 gifRow">
          <h3 className="font-bold text-h3 leading-h3">nos encargan el trabajo</h3>
          <div className="grid grid-cols-2 gap-12">
            <img src="aboutUsImg\phone.gif" alt="" className="w-full h-full col-span-2 md:col-span-1"/>
            <img src="aboutUsImg\keyboard.gif" alt="" className="hidden w-full h-full col-span-1 md:block scale-x-[-1]"/>
          </div>
        </div>
        <div className="mt-6 gifRow">
          <h3 className="font-bold text-h3 leading-h3 text-end">reunión de equipo</h3>
          <div className="grid grid-cols-2 gap-12">
            <img src="aboutUsImg\meeting.gif" alt="" className="w-full h-full col-span-2 md:col-span-1"/>
            <img src="aboutUsImg\fight.gif" alt="" className="hidden w-full h-full col-span-1 md:block"/>
          </div>
        </div>
        <div className="mt-6 gifRow">
          <h3 className="font-bold text-h3 leading-h3">working</h3>
          <div className="grid grid-cols-2 gap-12">
            <img src="aboutUsImg\anxious.gif" alt="" className="w-full h-full col-span-2 md:col-span-1"/>
            <img src="aboutUsImg\anoyed.gif" alt="" className="hidden w-full h-full col-span-1 md:block scale-x-[-1]"/>
          </div>
        </div>
        <div className="mt-6 gifRow">
          <h3 className="font-bold text-h3 leading-h3 text-end">desesperate </h3>
          <div className="grid grid-cols-2 gap-12">
            <img src="aboutUsImg\mad.gif" alt="" className="hidden w-full h-full col-span-1 md:block"/>
            <img src="aboutUsImg\hungry.gif" alt="" className="w-full h-full col-span-2 md:col-span-1"/>
          </div>
        </div>
        <div className="mt-6 gifRow">
          <h3 className="font-bold text-h3 leading-h3">earn money 🐒❤️ </h3>
          <div className="grid grid-cols-2 gap-12">
            <img src="aboutUsImg\rich.gif" alt="" className="w-full h-full col-span-2 md:col-span-1"/>
            <img src="aboutUsImg\happy.gif" alt="" className="hidden w-full h-full col-span-1 md:block"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
