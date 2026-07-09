"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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


  return (
    <BookingContext.Provider value={{ handleBookClick }}>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </BookingContext.Provider>
  );
}
