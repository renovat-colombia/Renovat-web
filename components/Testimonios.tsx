"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconoAnterior, IconoEstrella, IconoSiguiente } from "./Iconos";

const testimonios = [
  {
    nombre: "Adriana Medina",
    texto:
      "Quedé muy feliz con el trabajo realizado por RenovaT. Desde el primer momento fueron muy atentos, responsables y cuidadosos con cada detalle. El resultado superó mis expectativas y dejaron el espacio completamente renovado. Los recomiendo totalmente por la calidad de su trabajo y el compromiso que tienen con sus clientes.",
  },
  {
    nombre: "Flor Tovar",
    texto:
      "Estoy muy agradecida con RenovaT por el excelente trabajo que realizaron. Cumplieron con lo acordado, fueron muy profesionales y estuvieron pendientes de cada detalle durante todo el proceso. Me encantó el resultado final y sin duda volvería a contar con ellos para futuros proyectos. ¡Los recomiendo muchísimo!",
  },
  {
    nombre: "Ferley Medina",
    texto:
      "Excelente experiencia con RenovaT. Se nota el compromiso y la dedicación que ponen en cada trabajo. Realizaron las adecuaciones que necesitaba de manera organizada y con muy buenos acabados. Estoy muy satisfecho con el resultado y agradecido por la atención recibida. Recomiendo a RenovaT completamente.",
  },
];

function iniciales(nombre: string) {
  return nombre
    .split(" ")
    .map((parte) => parte.charAt(0))
    .join("")
    .toUpperCase();
}

const claseFlecha =
  "flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-oro hover:text-oro disabled:pointer-events-none disabled:opacity-30";

export default function Testimonios() {
  const carruselRef = useRef<HTMLUListElement>(null);
  const [hayAnterior, setHayAnterior] = useState(false);
  const [haySiguiente, setHaySiguiente] = useState(false);

  const actualizarFlechas = useCallback(() => {
    const carrusel = carruselRef.current;
    if (!carrusel) return;
    setHayAnterior(carrusel.scrollLeft > 4);
    setHaySiguiente(
      carrusel.scrollLeft + carrusel.clientWidth < carrusel.scrollWidth - 4
    );
  }, []);

  useEffect(() => {
    const carrusel = carruselRef.current;
    if (!carrusel) return;
    const observador = new ResizeObserver(actualizarFlechas);
    observador.observe(carrusel);
    return () => observador.disconnect();
  }, [actualizarFlechas]);

  const mover = (direccion: 1 | -1) => {
    const carrusel = carruselRef.current;
    const tarjeta = carrusel?.querySelector("li");
    if (!carrusel || !tarjeta) return;
    const espacio = parseFloat(getComputedStyle(carrusel).columnGap) || 0;
    carrusel.scrollBy({
      left: direccion * (tarjeta.offsetWidth + espacio),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-titulo"
      className="bg-carbon py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-oro">
          Lo que dicen nuestros clientes
        </p>
        <div className="mt-3 flex items-center justify-between gap-6">
          <h2
            id="testimonios-titulo"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Testimonios
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => mover(-1)}
              disabled={!hayAnterior}
              aria-label="Ver testimonio anterior"
              className={claseFlecha}
            >
              <IconoAnterior className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              disabled={!haySiguiente}
              aria-label="Ver testimonio siguiente"
              className={claseFlecha}
            >
              <IconoSiguiente className="size-5" />
            </button>
          </div>
        </div>

        <ul
          ref={carruselRef}
          onScroll={actualizarFlechas}
          className="sin-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto"
        >
          {testimonios.map(({ nombre, texto }) => (
            <li
              key={nombre}
              className="w-[85%] shrink-0 snap-start sm:w-[calc(50%_-_0.625rem)] lg:w-[calc((100%_-_2.5rem)/3)]"
            >
              <article className="flex h-full gap-4 rounded-lg border border-white/10 bg-grafito p-6">
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-oro/40 bg-hierro text-sm font-bold text-oro"
                >
                  {iniciales(nombre)}
                </span>
                <div>
                  <h3 className="font-bold text-white">{nombre}</h3>
                  <div
                    role="img"
                    aria-label="Calificación: 5 de 5 estrellas"
                    className="mt-1 flex gap-0.5 text-oro"
                  >
                    {[1, 2, 3, 4, 5].map((estrella) => (
                      <IconoEstrella key={estrella} className="size-4" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-white/75">
                    <p>{texto}</p>
                  </blockquote>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}