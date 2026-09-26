import ContactoCTA from "@/components/ContactoCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Nosotros from "@/components/Nosotros";
import Proyectos from "@/components/Proyectos";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Proyectos />
        <section
          aria-label="Por qué elegirnos y contacto"
          className="bg-cal py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
            <Nosotros />
            <ContactoCTA />
          </div>
        </section>
        <Testimonios />
      </main>
      <Footer />
    </>
  );
}