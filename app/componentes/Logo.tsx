import { useEffect, useState } from "react";
import { getTheme, useDarkMode } from "~/hooks/useDarkMode";
import type { Theme, variantLogo } from "~/types/types";

interface LogoProps {
  variant?: variantLogo;
  width?: string;
}

function Logo({ variant = "negro", width = "20%" }: LogoProps) {
  const variants: Record<variantLogo, string> = {
    ruby: "iconos/iakoslogob.svg",
    negro: "iconos/iakoslogobl.svg",
    transparente: "iconos/iakoslogob.svg",
  };
  
  return (
    <img
      src={variants[variant]}
      alt="logo"
      className="h-auto max-w-full"
      style={{ width }}
    />
  );
}

export default Logo;
