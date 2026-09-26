"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { IconoCerrar, IconoMenu, IconoWhatsApp } from "./Iconos";
import { NAV_LINKS, TELEFONO, WHATSAPP_URL } from "@/lib/datos";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [activo, setActivo] = useState("inicio");
  const pausaHasta = useRef(0);

  useEffect(() => {
    const visibles = new Set<string>();

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) visibles.add(entrada.target.id);
          else visibles.delete(entrada.target.id);
        }
        if (Date.now() < pausaHasta.current) return;
        const seccion = NAV_LINKS.find((link) => visibles.has(link.id));
        if (seccion) setActivo(seccion.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const { id } of NAV_LINKS) {
      const elemento = document.getElementById(id);
      if (elemento) observador.observe(elemento);
    }

    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (!menuAbierto) return;

    const cerrarConEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAbierto(false);
    };

    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [menuAbierto]);

  const irA = (id: string) => {
    setActivo(id);
    setMenuAbierto(false);
    pausaHasta.current = Date.now() + 1000;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-carbon/95 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-24 lg:gap-6 lg:px-8"
      >
        <a
          href="#inicio"
          onClick={() => irA("inicio")}
          aria-label="RenovaT Colombia, ir al inicio"
          className="shrink-0"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-9">
          {NAV_LINKS.map(({ id, label }) => {
            const esActivo = activo === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => irA(id)}
                  aria-current={esActivo ? "true" : undefined}
                  className={`relative block py-2 text-sm font-medium transition-colors ${
                    esActivo ? "text-oro" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-oro transition-transform duration-300 ${
                      esActivo ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2.5 rounded-md border border-oro px-4 py-2.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-oro hover:text-carbon lg:inline-flex"
          >
            <IconoWhatsApp className="size-5 text-oro transition-colors group-hover:text-carbon" />
            {TELEFONO}
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribir por WhatsApp al ${TELEFONO}`}
            className="flex size-10 items-center justify-center rounded-md border border-oro/60 text-oro lg:hidden"
          >
            <IconoWhatsApp className="size-5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            className="flex size-10 items-center justify-center rounded-md text-white lg:hidden"
          >
            {menuAbierto ? (
              <IconoCerrar className="size-6" />
            ) : (
              <IconoMenu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!menuAbierto}
        className="border-t border-white/10 bg-carbon lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => irA(id)}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
                  activo === id ? "bg-white/5 text-oro" : "text-white/85"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}