import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ScrollStory from "@/components/ScrollStory";
import UeberUnsPreview from "@/components/UeberUnsPreview";
import Standorte from "@/components/Standorte";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceGrid preview />
        <ScrollStory />
        <UeberUnsPreview />
        <Standorte />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
