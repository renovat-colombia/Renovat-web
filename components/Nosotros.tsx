import Image from "next/image";
import { IconoCheck } from "./Iconos";

const razones = [
  "Materiales de alta calidad",
  "Acabados de lujo",
  "Precios competitivos",
  "Asesoría personalizada",
  "Garantía en todos nuestros trabajos",
];

export default function Nosotros() {
  return (
    <div id="nosotros" className="grid gap-6 sm:grid-cols-[2fr_3fr] sm:gap-8">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-300 sm:aspect-auto sm:min-h-72">
        <Image
          src="/images/nosotros.jpg"
          alt="Profesional de RenovaT Colombia instalando un mueble de cocina"
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 40vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="self-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ocre">
          ¿Por qué elegirnos?
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance text-carbon">
          Comprometidos con tu satisfacción
        </h2>
        <p className="mt-4 text-neutral-700">
          Trabajamos en proyectos para viviendas, apartamentos, oficinas,
          locales comerciales, empresas y demás espacios que requieran
          mantenimiento, reparación o renovación.
        </p>
        <p className="mt-3 font-semibold text-carbon">
          Representante legal: Brandon Stiwen Duque Castellanos
        </p>
        <ul className="mt-6 space-y-3">
          {razones.map((razon) => (
            <li key={razon} className="flex items-start gap-3 text-neutral-700">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-oro text-carbon">
                <IconoCheck className="size-3" strokeWidth={3} />
              </span>
              {razon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}