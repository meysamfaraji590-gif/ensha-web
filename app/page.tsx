import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Platform from "@/components/home/Platform";
import About from "@/components/home/About";
import Documents from "@/components/home/Documents";
import Investors from "@/components/home/Investors";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAF8]">
        <Hero />
        <Story />
        <Platform />
        <About />
        <Documents />
        <Investors />
        <Contact />
      </main>

      <Footer />
    </>
  );
}