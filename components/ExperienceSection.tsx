"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { SiReact, SiNextdotjs, SiNestjs, SiMongodb } from "react-icons/si";

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const experienceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
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

      <div ref={containerRef} className="relative max-w-4xl mx-auto z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-semibold text-light mb-4 border-b-2 border-accent pb-3 md:text-3xl sm:text-2xl">
            Building
          </h2>
          <p className="text-light-3 mb-12 text-lg md:text-base sm:text-sm">
            Here's what I've been working on
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Game Theory */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={experienceVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-dark-2 p-8 rounded-lg border border-dark-3 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer group"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-light md:text-xl sm:text-lg">
                  Software Engineer II
                </h3>
                <motion.div
                  className="w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <p className="text-xl text-accent mb-2 md:text-lg sm:text-base font-medium">
                Game Theory
              </p>
              <p className="text-light-3 text-sm md:text-xs mb-4">
                October 2023 – Present
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                  title="React Native"
                >
                  <SiReact className="text-accent text-2xl" />
                  <span className="absolute -top-1 -right-1 text-[8px] text-accent font-bold">RN</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-8 h-8 rounded bg-accent/20 text-accent text-sm font-bold"
                  title="Expo"
                >
                  E
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <SiNextdotjs className="text-accent text-2xl" title="Next.js" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: -5 }} transition={{ duration: 0.2 }}>
                  <SiNestjs className="text-accent text-2xl" title="NestJS" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <SiMongodb className="text-accent text-2xl" title="MongoDB" />
                </motion.div>
              </div>
            </div>
            <ul className="space-y-4 text-light-2 max-w-reading md:text-base sm:text-sm">
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Scaled consumer mobile application to <strong className="text-accent">50,000+ downloads</strong> and grew monthly active users from <strong className="text-accent">2,000 to 20,000+</strong>
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Improved Android performance from <strong className="text-accent">40–50 FPS to 100–120 FPS</strong> through systematic profiling and optimization
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Built and maintained tablet-based face registration and check-in systems for production deployment
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Delivered features end-to-end from design to production, working across <strong className="text-accent">React Native, Expo, Next.js, and NestJS</strong> in a monorepo architecture
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Improved application stability, performance, and edge-case handling across mobile and web platforms
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Matchday AI */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={experienceVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-dark-2 p-8 rounded-lg border border-dark-3 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer group"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-light md:text-xl sm:text-lg">
                  Software Engineer
                </h3>
                <motion.div
                  className="w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <p className="text-xl text-accent mb-2 md:text-lg sm:text-base font-medium">
                Matchday AI
              </p>
              <p className="text-light-3 text-sm md:text-xs mb-4">
                September 2022 – September 2023
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <SiReact className="text-accent text-2xl" title="React" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                  title="React Native"
                >
                  <SiReact className="text-accent text-2xl" />
                  <span className="absolute -top-1 -right-1 text-[8px] text-accent font-bold">RN</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <SiNextdotjs className="text-accent text-2xl" title="Next.js" />
                </motion.div>
              </div>
            </div>
            <ul className="space-y-4 text-light-2 max-w-reading md:text-base sm:text-sm">
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Built React and HTML Canvas tools for correcting AI-detected shuttle points in sports analytics
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Developed React Native applications for coaches and players with focus on usability and performance
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Contributed to Next.js internal web applications supporting core product functionality
                </span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Collaborated closely with ML teams on human-in-the-loop systems for data quality and model improvement
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
