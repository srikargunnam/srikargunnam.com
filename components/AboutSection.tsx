"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen bg-dark-2 py-20 px-6 md:px-4 sm:px-3 overflow-hidden"
    >
      {/* Scroll-tied background effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(74, 158, 255, 0.2) 0%, transparent 70%)`,
          y: backgroundY,
          opacity,
        }}
      />

      <AnimatedSection className="relative max-w-4xl mx-auto z-10">
        <h2 className="text-4xl font-semibold text-light mb-4 border-b-2 border-accent pb-3 md:text-3xl sm:text-2xl">
          About
        </h2>
        <p className="text-light-3 mb-12 text-lg md:text-base sm:text-sm">
          A bit about my journey
        </p>
        <div className="space-y-6 text-light-2 max-w-reading md:text-base sm:text-sm">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="leading-relaxed text-xl md:text-lg sm:text-base"
          >
            I transitioned from a non-technical background to software engineering, driven by curiosity and a desire to build things that matter. What started as learning web development has evolved into a career focused on creating production-grade applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="leading-relaxed text-xl md:text-lg sm:text-base"
          >
            My approach to engineering centers on understanding the full picture—from user experience to system architecture. I value clean code, thoughtful design, and solutions that scale. Working in monorepo environments has taught me the importance of maintainability and developer experience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="leading-relaxed text-xl md:text-lg sm:text-base"
          >
            Beyond engineering, I run a small pet boarding business. Managing operations, customer relationships, and systems thinking outside of code has reinforced my belief that good engineering is about solving real problems with practical solutions.
          </motion.p>
        </div>
      </AnimatedSection>
    </section>
  );
}
