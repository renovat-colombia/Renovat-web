import Logo from "./Logo";
import {
  IconoInstagram,
  IconoTiktok,
  IconoUbicacion,
  IconoWhatsApp,
} from "./Iconos";
import { REDES, TELEFONO, UBICACION, WHATSAPP_URL } from "@/lib/datos";

const redes = [
  { nombre: "Instagram", url: REDES.instagram, icono: IconoInstagram },
  { nombre: "TikTok", url: REDES.tiktok, icono: IconoTiktok },
];

const anioActual = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-center sm:px-6 lg:grid-cols-[auto_1fr_auto_auto] lg:items-center lg:gap-12 lg:px-8 lg:text-left">
        <a
          href="#inicio"
          aria-label="RenovaT Colombia, volver al inicio"
          className="justify-self-center lg:justify-self-start"
        >
          <Logo className="h-16 lg:h-20" />
        </a>

        <div className="text-sm text-white/70">
          <p className="mx-auto max-w-xs lg:mx-0">
            Renovamos y transformamos tus espacios con profesionalismo y
            pasión.
          </p>
          <p className="mt-3 text-xs text-white/45">
            © {anioActual} RenovaT Colombia. Todos los derechos reservados.
          </p>
          <p className="mt-1 text-xs text-white/45">
            Representante legal: Brandon Stiwen Duque Castellanos
          </p>
        </div>

        <ul className="flex justify-center gap-5">
          {redes.map(({ nombre, url, icono: Icono }) => (
            <li key={nombre}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${nombre} de RenovaT Colombia`}
                className="block text-oro transition-colors hover:text-oro-claro"
              >
                <Icono className="size-6" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-3 text-sm lg:items-start lg:border-l lg:border-white/15 lg:pl-10">
          <p className="flex items-center gap-2 text-white/80">
            <IconoUbicacion className="size-5 text-oro" />
            {UBICACION}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-bold text-white transition-colors hover:text-oro"
          >
            <IconoWhatsApp className="size-5 text-oro" />
            {TELEFONO}
          </a>
        </div>
      </div>
    </footer>
  );
}