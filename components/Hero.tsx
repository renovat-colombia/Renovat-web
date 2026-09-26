import Image from "next/image";
import {
  IconoEscudo,
  IconoReloj,
  IconoUbicacion,
  IconoUsuarios,
  IconoWhatsApp,
} from "./Iconos";
import { UBICACION, WHATSAPP_URL } from "@/lib/datos";

const beneficios = [
  { icono: IconoEscudo, texto: "Garantía en cada trabajo" },
  { icono: IconoUsuarios, texto: "Profesionales calificados" },
  { icono: IconoReloj, texto: "Cumplimiento y puntualidad" },
  { icono: IconoUbicacion, texto: UBICACION },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-carbon pt-18 lg:pt-24"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-carbon/75 md:bg-transparent md:bg-linear-to-r md:from-carbon md:via-carbon/80 md:to-carbon/5"
      />

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 lg:min-h-0 lg:px-8 lg:pt-24 lg:pb-16">
        <h1 className="max-w-[12em] text-[2.5rem] font-extrabold leading-[1.04] tracking-tight text-white motion-safe:animate-subir sm:text-5xl lg:text-6xl">
          Transformamos espacios, renovamos
          <span className="block text-oro">tu vida.</span>
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80 motion-safe:animate-subir motion-safe:[animation-delay:120ms]">
          Donde cada reparación refleja un hogar.
        </p>

        <div className="mt-9 flex flex-col gap-3 motion-safe:animate-subir motion-safe:[animation-delay:240ms] sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-oro px-6 py-4 text-sm font-bold uppercase tracking-wider text-carbon transition-colors hover:bg-oro-claro"
          >
            <IconoWhatsApp className="size-5" />
            Cotiza por WhatsApp
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center rounded-md border border-white/60 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-oro hover:text-oro"
          >
            Ver proyectos
          </a>
        </div>

        <ul className="mt-14 grid max-w-3xl grid-cols-2 gap-6 motion-safe:animate-subir motion-safe:[animation-delay:360ms] lg:mt-16 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
          {beneficios.map(({ icono: Icono, texto }) => (
            <li
              key={texto}
              className="flex items-center gap-3 lg:px-6 lg:first:pl-0"
            >
              <Icono className="size-8 shrink-0 text-oro" />
              <span className="max-w-[9rem] text-sm leading-snug text-white/85">
                {texto}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}