"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Navbar from "@/components/layout/old-Navbar";
import Footer from "@/components/layout/old-Footer";
import AppointmentModal from "@/components/home/old-AppointmentModal";
import type { BookingContextType } from "@/types/booking";

const BookingContext = createContext<BookingContextType | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within LayoutClient");
  return ctx;
}

export default function LayoutClient({ children }: { children: ReactNode }) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookClick = (presetService?: string) => {
    setSelectedService(presetService || "");
    setIsBookModalOpen(true);
  };

  const handlePriceListClick = () => {
    handleBookClick("Pathology & Blood Tests");
  };

  return (
    <BookingContext.Provider value={{ handleBookClick, handlePriceListClick }}>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AppointmentModal
          isOpen={isBookModalOpen}
          onClose={() => setIsBookModalOpen(false)}
          selectedServicePreset={selectedService}
        />
      </div>
    </BookingContext.Provider>
  );
}
