import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { motion } from "framer-motion";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("link", {
        rel: "shortcut icon",
        href: "favicon2.ico",
        type: "image/x-icon"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "container p-4 pt-16 mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Logo({ variant = "negro", width = "20%" }) {
  const variants = {
    ruby: "iconos/iakoslogob.svg",
    negro: "iconos/iakoslogobl.svg"
  };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: variants[variant],
      alt: "logo",
      className: "h-auto max-w-full",
      style: { width }
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full gap-8 px-4 py-4 text-black bg-white lg:grid lg:grid-cols-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center col-span-1 lg:justify-start", children: [
      /* @__PURE__ */ jsx(Logo, { variant: "negro", width: "3rem" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "mx-1", children: "Enterprise" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center col-span-4 md:flex-row", children: /* @__PURE__ */ jsxs("p", { className: "w-[80%] lg:w-[80%] flex flex-col lg:flex-row justify-evenly items-center text-center text-sm lg:text-lg font-semibold gap-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "",
          className: "relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all \r\n            after:duration-300 after:translate-x-[-50%] hover:after:w-full",
          children: "Condiciones de uso"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "hidden lg:block", children: "|" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "",
          className: "relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all \r\n            after:duration-300 after:translate-x-[-50%] hover:after:w-full",
          children: "Cookies"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "hidden lg:block", children: "|" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "",
          className: "relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all \r\n            after:duration-300 after:translate-x-[-50%] hover:after:w-full",
          children: "Aviso de privacidad"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center w-full col-span-1 gap-8 lg:justify-end", children: [
      /* @__PURE__ */ jsx("a", { href: "", className: "flex align-middle", children: /* @__PURE__ */ jsx("img", { src: "iconos/RRSS/x.svg", alt: "", className: "w-8" }) }),
      /* @__PURE__ */ jsx("a", { href: "", className: "flex align-middle", children: /* @__PURE__ */ jsx("img", { src: "iconos/RRSS/youtube.svg", alt: "", className: "w-8" }) }),
      /* @__PURE__ */ jsx("a", { href: "", className: "flex align-middle", children: /* @__PURE__ */ jsx("img", { src: "iconos/RRSS/instagram.svg", alt: "", className: "w-8" }) })
    ] })
  ] });
}
function DisplayComponente({
  nombre,
  componentes,
  descripcion,
  flexDireccion = "row",
  gap = 8
}) {
  return /* @__PURE__ */ jsx("div", { className: "w-[80%] mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "container ", children: [
    /* @__PURE__ */ jsx("h2", { className: "mt-16 mb-8 text-4xl font-bold text-center", children: nombre }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `border-2 bg-gray-600 rounded-lg shadow-lg w-[100%] p-16 flex justify-around gap-${gap} flex-${flexDireccion}`,
        children: componentes.map((componente, index) => /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: componente }, index))
      }
    )
  ] }) }) });
}
function Button({
  text,
  variant = "ruby",
  onClick = () => console.log("Probando boton"),
  imagen,
  ancho
}) {
  const variants = {
    blanco: "px-2 text-black bg-white hover:bg-grey h-full self-stretch",
    blanco2: "px-12 text-p_ruby bg-white hover:bg-p_ruby-hover hover:text-white",
    negro: "px-4 text-white bg-black hover:bg-stone-900",
    ruby: "px-4 text-white bg-p_ruby hover:bg-p_ruby-hover",
    aikos: "px-6 text-2xl text-black bg-white hover:text-white hover:bg-black"
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `self-center font-bold py-2 rounded hover:cursor-pointer ${variants[variant]} flex items-center justify-center w-[${ancho}]`,
      onClick: () => onClick(text || ""),
      children: [
        imagen && /* @__PURE__ */ jsx("img", { src: imagen, alt: text, className: "w-8 h-8" }),
        text
      ]
    }
  );
}
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("div", { className: "flex ", children: [
    /* @__PURE__ */ jsx(Button, { variant: "aikos", text: "aiko's" }, 1),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "ms-4",
        onMouseEnter: () => setShowNavbar(true),
        onMouseLeave: () => setShowNavbar(false),
        children: /* @__PURE__ */ jsx(Button, { variant: "blanco", imagen: "iconos/bars-solid.svg" }, 2)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "bg-white rounded shadow-lg ms-2",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: showNavbar ? 1 : 0, x: showNavbar ? 0 : -10 },
        transition: { duration: 0.2 },
        onMouseEnter: () => setShowNavbar(true),
        onMouseLeave: () => setShowNavbar(false),
        children: /* @__PURE__ */ jsxs("ul", { className: "flex h-full text-black", children: [
          /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("li", { className: "flex items-center h-full px-6 border-0 border-black border-e-2 hover:bg-grey", children: "About Us" }) }),
          /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("li", { className: "flex items-center h-full px-6 border-0 border-black border-e-2 hover:bg-grey", children: "Contact" }) }),
          /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("li", { className: "flex items-center h-full px-6 border-0 border-black border-e-2 hover:bg-grey", children: "Services" }) })
        ] })
      }
    )
  ] }) }) });
}
function Input({
  placeholder = "",
  initialValue = "",
  onChange = () => console.log(""),
  type,
  isDisabled = false,
  hasError = false,
  errorMessage = "Error en el input"
}) {
  const [value, setValue] = useState(initialValue);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full font-semibold", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: `border py-2 px-4 rounded focus:outline-none focus:ring-2 shadow-inner
          ${hasError ? "border-white focus:ring-gray-500" : "border-p_ruby-hover focus:ring-s_yellow"}
          ${isDisabled ? "bg-gray-800 placeholder-gray-600" : "bg-p_ruby-disable placeholder-grey "} 
          `,
        type,
        placeholder,
        value,
        onChange: (event) => {
          console.log(event.target.value);
          setValue(event.target.value);
          onChange(event.target.value);
        },
        disabled: isDisabled
      }
    ),
    hasError && /* @__PURE__ */ jsx("p", { className: "text-xs text-white", children: errorMessage })
  ] });
}
function InputDateTime() {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full p-2 bg-p_ruby rounded-2xl", children: [
    /* @__PURE__ */ jsx("input", { type: "date" }),
    /* @__PURE__ */ jsx("input", { type: "time" })
  ] });
}
function Textarea({
  rows = 10,
  placeholder = "",
  initialValue = "",
  onChange = () => console.log(""),
  isDisabled = false,
  hasError = false,
  errorMessage = "Error en el input"
}) {
  const [value, setValue] = useState(initialValue);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full font-semibold", children: [
    /* @__PURE__ */ jsx(
      "textarea",
      {
        rows,
        className: `border py-2 px-4 rounded placeholder-grey focus:outline-none focus:ring-2 shadow-inner
          ${hasError ? "border-white focus:ring-gray-500" : "border-p_ruby-hover focus:ring-s_yellow"}
          ${isDisabled ? "bg-gray-200" : "bg-p_ruby-disable"} 
          `,
        placeholder,
        value,
        onChange: (event) => {
          console.log(event.target.value);
          setValue(event.target.value);
          onChange(event.target.value);
        },
        disabled: isDisabled
      }
    ),
    hasError && /* @__PURE__ */ jsx("p", { className: "text-xs text-white", children: errorMessage })
  ] });
}
function Formulario() {
  return /* @__PURE__ */ jsxs("form", { className: "bg-p_ruby w-[50%] p-8 h-auto", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-6 text-4xl", children: "Tu información" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8", children: [
      /* @__PURE__ */ jsx(InputDateTime, {}),
      /* @__PURE__ */ jsx(Input, { type: "text", placeholder: "Nombre *" }),
      /* @__PURE__ */ jsx(Input, { type: "text", placeholder: "Apellidos *", isDisabled: true }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          placeholder: "Direccion *",
          hasError: true,
          errorMessage: "Error: Necesita al menos 10 caracteres."
        }
      ),
      /* @__PURE__ */ jsx(Textarea, { rows: 8, placeholder: "¿En qué podemos ayudar?" }),
      /* @__PURE__ */ jsx(Button, { text: "Enviar", variant: "blanco2", ancho: "40%" })
    ] })
  ] });
}
function CardContacto({ icono, texto }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 px-4 py-4 text-black bg-white border-4", children: [
    /* @__PURE__ */ jsx("img", { src: icono, alt: "", className: "w-[12.5%]" }),
    /* @__PURE__ */ jsx("p", { className: "text-3xl", children: texto })
  ] });
}
function CardServicio({ titulo, descripcion, servicios }) {
  const [showCard, setShowCard] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `text-white w-full py-6 px-12 flex justify-between items-center transition-all duration-300 ease-in-out
            ${showCard ? "bg-p_ruby-hover" : "bg-p_ruby"}
            `,
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold", children: titulo }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-12 text-white cursor-pointer",
              onClick: () => setShowCard(!showCard),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "iconos/plusb-solid.svg",
                  alt: "",
                  className: `stroke-white stroke-2 transition-all duration-300 ease-in-out
                    ${showCard ? "rotate-45" : ""}
                    `
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: showCard ? "auto" : 0, opacity: showCard ? 1 : 0 },
        transition: { duration: 0.5, ease: "easeInOut" },
        className: "w-full px-12 overflow-hidden shadow-lg bg-p_ruby-hover",
        children: /* @__PURE__ */ jsxs("div", { className: "grid w-full grid-cols-4 py-8 text-white", children: [
          /* @__PURE__ */ jsx("p", { className: "flex flex-col justify-center col-span-2", children: descripcion }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-col justify-center col-span-1 col-start-4 gap-1", children: servicios.map((servicio, index) => /* @__PURE__ */ jsx("li", { className: "text-end", children: servicio }, index)) }),
          /* @__PURE__ */ jsx("a", { href: "", className: "my-4 text-s_yellow", children: "Know more..." })
        ] })
      }
    )
  ] });
}
function meta({}) {
  return [{
    title: "AIKO's Enterprise"
  }, {
    name: "description",
    content: "Welcome to aiko's"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h2", {
      className: "mt-16 text-5xl font-extrabold text-center",
      children: "COMPONENTES"
    }), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Logo",
      componentes: [/* @__PURE__ */ jsx(Logo, {
        variant: "negro",
        width: "40%"
      }), /* @__PURE__ */ jsx(Logo, {
        variant: "ruby",
        width: "40%"
      })],
      descripcion: "Logo corporativo"
    }, 1), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Footer",
      componentes: [/* @__PURE__ */ jsx(Footer, {})],
      descripcion: "Footer"
    }, 2), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Boton",
      componentes: [/* @__PURE__ */ jsx(Button, {
        variant: "aikos",
        text: "aiko's"
      }, 1), /* @__PURE__ */ jsx(Button, {
        variant: "blanco",
        imagen: "iconos/bars-solid.svg"
      }, 2), /* @__PURE__ */ jsx(Button, {
        variant: "ruby",
        text: "boton"
      }, 3), /* @__PURE__ */ jsx(Button, {
        variant: "blanco2",
        text: "Enviar"
      }, 4), /* @__PURE__ */ jsx(Button, {
        variant: "negro",
        text: "boton"
      }, 5)],
      descripcion: "Boton"
    }, 3), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Header",
      componentes: [/* @__PURE__ */ jsx(Header, {})]
    }, 5), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Input",
      componentes: [/* @__PURE__ */ jsx(Input, {
        type: "text",
        placeholder: "Nombre *"
      })]
    }, 6), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "InputDatetime",
      componentes: [/* @__PURE__ */ jsx(InputDateTime, {})]
    }, 7), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Textarea",
      componentes: [/* @__PURE__ */ jsx(Textarea, {
        rows: 8,
        placeholder: "¿En qué podemos ayudar?"
      })]
    }, 8), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Formulario",
      componentes: [/* @__PURE__ */ jsx(Formulario, {})]
    }, 9), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Card Contacto",
      componentes: [/* @__PURE__ */ jsx(CardContacto, {
        icono: "iconos/Contacto/phone-volume-solid.svg",
        texto: "+34 612 345 678"
      }), /* @__PURE__ */ jsx(CardContacto, {
        icono: "iconos/Contacto/correo.svg",
        texto: "correo@correo.es"
      })]
    }, 10), /* @__PURE__ */ jsx(DisplayComponente, {
      nombre: "Card Servicio",
      flexDireccion: "col",
      gap: 0,
      componentes: [/* @__PURE__ */ jsx(CardServicio, {
        titulo: "Servicio 1",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus leo odio, lobortis sagittis enim bibendum vel. In ac vehicula nunc. Nullam tincidunt nec lacus vitae porttitor. Maecenas eu vulputate purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dignissim sagittis accumsan. Curabitur facilisis turpis non fermentum posuere.",
        servicios: ["Servicio 1", "Servicio 2", "Servicio 3"]
      }, 1), /* @__PURE__ */ jsx(CardServicio, {
        titulo: "Servicio 2",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus leo odio, lobortis sagittis enim bibendum vel. In ac vehicula nunc. Nullam tincidunt nec lacus vitae porttitor. Maecenas eu vulputate purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dignissim sagittis accumsan. Curabitur facilisis turpis non fermentum posuere.",
        servicios: ["Servicio 1", "Servicio 2", "Servicio 3"]
      }, 2), /* @__PURE__ */ jsx(CardServicio, {
        titulo: "Servicio 3",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus leo odio, lobortis sagittis enim bibendum vel. In ac vehicula nunc. Nullam tincidunt nec lacus vitae porttitor. Maecenas eu vulputate purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dignissim sagittis accumsan. Curabitur facilisis turpis non fermentum posuere.",
        servicios: ["Servicio 1", "Servicio 2", "Servicio 3"]
      }, 3)]
    }, 11)]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-QGsOKR_y.js", "imports": ["/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-EK4dr7vE.js", "imports": ["/assets/chunk-IR6S3I6Y-BvsIcvZg.js", "/assets/with-props-DvPqDDfd.js"], "css": ["/assets/root-DaXnUC8a.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-akspyF8N.js", "imports": ["/assets/with-props-DvPqDDfd.js", "/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": ["/assets/home-CTzKUkOS.css"] } }, "url": "/assets/manifest-0f1af65c.js", "version": "0f1af65c" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
