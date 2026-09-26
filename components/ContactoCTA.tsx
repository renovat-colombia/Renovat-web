import Image from "next/image";
import { IconoCorreo, IconoUbicacion, IconoWhatsApp } from "./Iconos";
import { EMAIL, TELEFONO, UBICACION, WHATSAPP_URL } from "@/lib/datos";

export default function ContactoCTA() {
  return (
    <div
      id="contacto"
      className="grid overflow-hidden rounded-xl bg-carbon sm:grid-cols-[2fr_3fr]"
    >
      <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-72">
        <Image
          src="/images/contacto.jpg"
          alt="Profesional de RenovaT Colombia pintando con rodillo"
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 40vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <h2 className="text-xl font-extrabold uppercase leading-snug tracking-wide text-balance text-oro">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-2 text-white/80">
          Escríbenos y recibe tu cotización sin compromiso.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex w-fit items-center gap-3 rounded-md border border-oro px-5 py-3 text-lg font-bold text-white transition-colors hover:bg-oro hover:text-carbon"
        >
          <IconoWhatsApp className="size-6 text-oro transition-colors group-hover:text-carbon" />
          {TELEFONO}
        </a>

        <ul className="mt-6 space-y-2.5 text-sm text-white/80">
          <li className="flex items-center gap-3">
            <IconoUbicacion className="size-5 shrink-0 text-oro" />
            {UBICACION}
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 transition-colors hover:text-oro"
            >
              <IconoCorreo className="size-5 shrink-0 text-oro" />
              {EMAIL}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}