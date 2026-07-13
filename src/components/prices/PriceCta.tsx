import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { PriceCtaProps } from "@/types/price";

/** CTA banner encouraging appointment booking */
export default function PriceCta({ title, desc, buttonText }: PriceCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-10 bg-gradient-to-r from-[#034668] to-[#0a5f8f] rounded-sm p-8 md:p-10 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{title}</h2>
      <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-6">{desc}</p>
      <Link
        href="/appointment"
        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
      >
        <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
