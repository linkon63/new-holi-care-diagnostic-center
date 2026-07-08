import Hero from "@/components/home/Hero";
import AboutStats from "@/components/home/AboutStats";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
