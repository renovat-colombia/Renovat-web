import type { SVGProps } from "react";

export type IconoProps = SVGProps<SVGSVGElement>;

function Trazo({ children, ...props }: IconoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Relleno({ children, ...props }: IconoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

// Iconos de Relleno
export const IconoWhatsApp = (props: IconoProps) => (
  <Relleno {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </Relleno>
);

export const IconoEstrella = (props: IconoProps) => (
  <Relleno {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Relleno>
);

// Iconos de Trazo (Originales + Nuevos)
export const IconoInstagram = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Trazo>
);

export const IconoFacebook = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Trazo>
);

export const IconoTiktok = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
  </Trazo>
);

export const IconoEscudo = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Trazo>
);

export const IconoUsuarios = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Trazo>
);

export const IconoReloj = (props: IconoProps) => (
  <Trazo {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Trazo>
);

export const IconoUbicacion = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Trazo>
);

export const IconoCorreo = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Trazo>
);

export const IconoCheck = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M20 6 9 17l-5-5" />
  </Trazo>
);

export const IconoAnterior = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="m15 18-6-6 6-6" />
  </Trazo>
);

export const IconoSiguiente = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="m9 18 6-6-6-6" />
  </Trazo>
);

export const IconoMenu = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Trazo>
);

export const IconoCerrar = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Trazo>
);

export const IconoRodillo = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="2" y="2" width="16" height="6" rx="2" />
    <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="8" y="16" width="4" height="6" rx="1" />
  </Trazo>
);

export const IconoEspatula = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="10" y="2" width="4" height="8" rx="1.5" />
    <path d="M12 10v2" />
    <path d="M8.5 12h7l2.5 9H6z" />
  </Trazo>
);

export const IconoLlana = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="3" y="15" width="18" height="4" rx="1" />
    <path d="M9 15v-3M15 15v-3" />
    <rect x="7" y="8" width="10" height="4" rx="2" />
  </Trazo>
);

export const IconoTuberia = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M5 4v7a7 7 0 0 0 14 0V4" />
    <path d="M9 4v7a3 3 0 0 0 6 0V4" />
    <path d="M3.5 4h7M13.5 4h7" />
  </Trazo>
);

export const IconoRayo = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </Trazo>
);

export const IconoPanel = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M12 3v18" />
    <path d="M7.5 7h.01M7.5 12h.01M7.5 17h.01M16.5 7h.01M16.5 12h.01M16.5 17h.01" />
  </Trazo>
);

export const IconoCuadricula = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </Trazo>
);

// Nuevos Iconos incorporados (Techo, Llave, Plano, Engranaje, Marco)
export const IconoTecho = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M4 10 12 4l8 6" />
    <path d="M6 10v3M10 10v3M14 10v3M18 10v3" />
    <path d="M4 16h16" />
  </Trazo>
);

export const IconoLlave = (props: IconoProps) => (
  <Trazo {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Trazo>
);

export const IconoPlano = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18" />
    <path d="M9 9v12" />
  </Trazo>
);

export const IconoEngranaje = (props: IconoProps) => (
  <Trazo {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </Trazo>
);

export const IconoMarco = (props: IconoProps) => (
  <Trazo {...props}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <circle cx="9.5" cy="9.5" r="1.5" />
    <path d="m4 16 4.5-4.5a2 2 0 0 1 2.8 0L16 16" />
  </Trazo>
);