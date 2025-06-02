import Logo from "~/componentes/Logo";
import type { footerVariant } from "~/types/types";

interface FooterProps {
  footerVariant?: footerVariant;
}
  
function Footer({footerVariant = "blanco"}: FooterProps) {

  let lineaHoverColor = (footerVariant == "blanco" ? "black" : "white") 
  
  const variants: Record<footerVariant, string> = {
    blanco: "text-white bg-transparent dark:text-black dark:bg-white",
    transparente: "text-white bg-transparent"
  };

  return (
    <div className={`flex flex-col w-full gap-8 px-24 py-4 footer lg:grid lg:grid-cols-6 ${variants[footerVariant]}`}>
      <div className="flex items-center justify-center col-span-1 lg:justify-start">
        <Logo variant={footerVariant == "blanco" ? "negro" : "transparente"} width="3rem" />
        <div>
          <p className="mx-1">Enterprise</p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 md:flex-row">
        <p className="w-[80%] lg:w-[80%] flex flex-col lg:flex-row justify-evenly items-center text-center text-sm lg:text-lg font-semibold gap-4">
          <a
            href=""
            className={`relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white dark:after:bg-black after:transition-all 
            after:duration-300 after:translate-x-[-50%] hover:after:w-full`}
          >
            Condiciones de uso
          </a>
          <span className="hidden lg:block">|</span>
          <a
            href=""
            className={`relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white dark:after:bg-black after:transition-all 
            after:duration-300 after:translate-x-[-50%] hover:after:w-full`}
          >
            Cookies
          </a>
          <span className="hidden lg:block">|</span>
          <a
            href=""
            className={`relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px]  after:bg-white dark:after:bg-black after:transition-all 
            after:duration-300 after:translate-x-[-50%] hover:after:w-full`}
          >
            Aviso de privacidad
          </a>
        </p>
      </div>
      <div className="flex justify-center w-full col-span-1 gap-8 lg:justify-end">
        <a href="" className="flex align-middle">
          <img src={`iconos/RRSS/x${footerVariant == "transparente"? "2": ""}.svg`} alt="" className="w-8" />
        </a>
        <a href="" className="flex align-middle">
          <img src={`iconos/RRSS/youtube${footerVariant == "transparente"? "2": ""}.svg`} alt="" className="w-8" />
        </a>
        <a href="" className="flex align-middle">
          <img src={`iconos/RRSS/instagram${footerVariant == "transparente"? "2": ""}.svg`} alt="" className="w-8" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
