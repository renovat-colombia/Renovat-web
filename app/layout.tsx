import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RenovaT Colombia | Reparaciones locativas en Bogotá",
  description:
    "Pintura, estuco, pañete, plomería, electricidad, drywall y PVC en Bogotá y alrededores. Acabados de lujo, garantía en cada trabajo y cotización sin compromiso por WhatsApp.",
  keywords: [
    "reparaciones locativas Bogotá",
    "remodelaciones Bogotá",
    "pintura de apartamentos",
    "estuco y pañete",
    "drywall Bogotá",
    "plomería",
    "electricidad",
    "PVC",
  ],
  openGraph: {
    title: "RenovaT Colombia | Transformamos espacios, renovamos tu vida",
    description:
      "Reparaciones locativas con acabados de lujo en Bogotá y alrededores. Cotiza sin compromiso por WhatsApp.",
    siteName: "RenovaT Colombia",
    locale: "es_CO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-CO" className={`${jakarta.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}