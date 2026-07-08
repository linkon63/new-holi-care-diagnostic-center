import Hero from "@/components/home/Hero";
import AboutStats from "@/components/home/AboutStats";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

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
