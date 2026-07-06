"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutStats from "@/components/about-stats";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AppointmentModal from "@/components/appointment-modal";

export default function Home() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookClick = (presetService?: string) => {
    setSelectedService(presetService || "");
    setIsBookModalOpen(true);
  };

  const handlePriceListClick = () => {
    // Open appointment modal preset to blood tests when price list is clicked
    handleBookClick("Pathology & Blood Tests");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar onBookClick={() => handleBookClick()} onPriceListClick={handlePriceListClick} />
      
      <main className="flex-grow">
        <Hero onBookClick={handleBookClick} />
        <AboutStats />
        <Services onBookClick={handleBookClick} />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      
      <AppointmentModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        selectedServicePreset={selectedService}
      />
    </div>
  );
}
