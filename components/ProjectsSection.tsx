"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { SiArduino } from "react-icons/si";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen bg-dark py-20 px-6 md:px-4 sm:px-3 overflow-hidden"
    >
      {/* Scroll-tied background effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(74, 158, 255, 0.15) 0%, transparent 70%)`,
          y: backgroundY,
        }}
      />

      <AnimatedSection className="relative max-w-4xl mx-auto z-10">
        <h2 className="text-4xl font-semibold text-light mb-4 border-b-2 border-accent pb-3 md:text-3xl sm:text-2xl">
          Beyond Code
        </h2>
        <p className="text-light-3 mb-12 text-lg md:text-base sm:text-sm">
          Business ventures and side projects
        </p>
        <div className="space-y-6 text-light-2 max-w-reading md:text-base sm:text-sm">
          {/* Fawrio Pet Boarding */}
          <motion.a
            href="https://www.fawrio.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="block bg-dark-2 p-8 rounded-lg border border-dark-3 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-light md:text-lg sm:text-base mb-1">
                  Fawrio
                </h3>
                <p className="text-sm text-accent">www.fawrio.com</p>
              </div>
              <motion.span
                className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                🐾
              </motion.span>
            </div>
            <p className="leading-relaxed text-light-2 text-xl md:text-lg sm:text-base mb-4">
              A pet boarding business I founded and operate. Involves managing daily operations, customer communication, and applying systems thinking to create efficient processes. Demonstrates ownership, product-mindedness, and problem-solving skills outside of code.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <span className="px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30">
                Business
              </span>
              <span className="px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30">
                Operations
              </span>
              <span className="px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30">
                Customer Service
              </span>
              <span className="px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30">
                Systems Thinking
              </span>
            </div>
          </motion.a>

          {/* CNC Laser Cutting Machine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-dark-2 p-8 rounded-lg border border-dark-3 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-light md:text-lg sm:text-base">
                CNC Laser Cutting Machine
              </h3>
              <motion.span
                className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ⚙️
              </motion.span>
            </div>
            <p className="leading-relaxed text-light-2 text-xl md:text-lg sm:text-base mb-4">
              A side project involving hardware and software integration for precision fabric cutting. Built with Arduino-based motor control and collaborative development with my brother.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30 hover:border-accent/60 transition-colors"
              >
                <SiArduino className="text-accent text-base" />
                <span>Arduino</span>
              </motion.div>
              <span className="px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30">
                Hardware
              </span>
              <span className="px-3 py-1 bg-dark rounded-full text-xs text-accent border border-accent/30">
                Embedded Systems
              </span>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}
