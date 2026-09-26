import {
  IconoCuadricula,
  IconoEngranaje,
  IconoEspatula,
  IconoLlana,
  IconoLlave,
  IconoMarco,
  IconoPanel,
  IconoPlano,
  IconoRayo,
  IconoRodillo,
  IconoTecho,
  IconoTuberia,
  IconoWhatsApp,
} from "./Iconos";
import { WHATSAPP_URL } from "@/lib/datos";

const servicios = [
  { nombre: "Drywall y construcción liviana", icono: IconoPanel },
  { nombre: "Pintura", icono: IconoRodillo },
  { nombre: "Estuco y acabados", icono: IconoEspatula },
  { nombre: "Electricidad", icono: IconoRayo },
  { nombre: "Plomería", icono: IconoTuberia },
  { nombre: "Techos en PVC", icono: IconoTecho },
  { nombre: "Enchapes", icono: IconoCuadricula },
  { nombre: "Pañete y reparación de muros", icono: IconoLlana },
  { nombre: "Reparaciones locativas", icono: IconoLlave },
  { nombre: "Adecuación y remodelación de espacios", icono: IconoPlano },
  { nombre: "Mantenimiento general", icono: IconoEngranaje },
  { nombre: "Decoración y acabados", icono: IconoMarco },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="bg-cal py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ocre">
              Nuestros servicios
            </p>
            <h2
              id="servicios-titulo"
              className="mt-3 max-w-[16em] text-3xl font-extrabold leading-tight tracking-tight text-balance text-carbon sm:text-4xl"
            >
              Soluciones completas para cada tipo de proyecto
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-neutral-600">
            Ofrecemos servicios integrales de reparación, mantenimiento y
            renovación para hogares, oficinas, locales y empresas.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4">
          {servicios.map(({ nombre, icono: Icono }) => (
            <li
              key={nombre}
              className="flex flex-col gap-4 rounded-lg bg-grafito p-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-hierro text-oro">
                <Icono className="size-6" />
              </span>
              <h3 className="text-[0.95rem] font-bold leading-snug text-balance text-white">
                {nombre}
              </h3>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-lg border border-ocre/30 bg-white px-6 py-5 sm:flex-row">
          <p className="text-center text-sm font-medium text-neutral-700 sm:text-left">
            ¿Necesitas un servicio que no ves aquí? Escríbenos y te contamos
            si podemos ayudarte.
          </p>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-md bg-oro px-5 py-3 text-sm font-bold uppercase tracking-wider text-carbon transition-colors hover:bg-oro-claro"
          >
            <IconoWhatsApp className="size-5" />
            Cotiza por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}