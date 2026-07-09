"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AppointmentForm from "@/components/home/AppointmentForm";

export default function QuickAppointment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [120, 0, 0, -50]);
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
      className="relative z-20 -mt-16 lg:-mt-20 px-4 sm:px-6 lg:px-8"
    >
      <AppointmentForm showHeader />
    </motion.div>
  );
}
