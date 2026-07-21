import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Impact from "@/components/Impact";
import AfghanProject from "@/components/AfghanProject";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <AfghanProject />
      <Team />
      <Gallery />
      <Partners />
      <Donate />
      <Footer />
    </main>
  );
}
