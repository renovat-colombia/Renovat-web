import Image from "next/image";
import { REDES } from "@/lib/datos";

const proyectos = [
  {
    imagen: "/images/proyecto-1.jpg",
    alt: "Aplicación de estuco en un muro",
    titulo: "Estuco y acabados",
  },
  {
    imagen: "/images/proyecto-2.jpg",
    alt: "Instalación de piso en porcelanato",
    titulo: "Piso en porcelanato",
  },
  {
    imagen: "/images/proyecto-3.jpg",
    alt: "Instalación de piso en madera",
    titulo: "Piso en madera",
  },
];

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-titulo"
      className="bg-carbon py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-oro">
              Proyectos realizados
            </p>
            <h2
              id="proyectos-titulo"
              className="mt-3 max-w-[16em] text-3xl font-extrabold leading-tight tracking-tight text-balance text-white sm:text-4xl"
            >
              Calidad que se ve, resultados que perduran.
            </h2>
          </div>
          
          <a
            href={REDES.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-md border border-oro px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-oro transition-colors hover:bg-oro hover:text-carbon"
          >
            Ver más proyectos
          </a>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12">
          {proyectos.map(({ imagen, alt, titulo }) => (
            <li
              key={imagen}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-grafito"
            >
              <Image
                src={imagen}
                alt={alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-carbon/90 to-transparent"
              />
              <span className="absolute bottom-3 left-4 text-sm font-bold text-white">
                {titulo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}