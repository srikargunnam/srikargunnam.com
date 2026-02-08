"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiNestjs, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase,
  SiRedux,
  SiGit,
  SiAndroidstudio,
  SiXcode
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | null;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export default function SkillsSection() {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const skills: SkillCategory[] = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: SiReact, badge: null },
        { name: "React Native", icon: SiReact, badge: "RN" },
        { name: "Next.js", icon: SiNextdotjs, badge: null },
        { name: "TypeScript", icon: SiTypescript, badge: null },
        { name: "Redux, Jotai, React Query", icon: SiRedux, badge: null },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, badge: null },
        { name: "NestJS", icon: SiNestjs, badge: null },
        { name: "REST APIs", icon: SiNodedotjs, badge: null },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB (including aggregation pipelines)", icon: SiMongodb, badge: null },
        { name: "PostgreSQL", icon: SiPostgresql, badge: null },
        { name: "Firebase", icon: SiFirebase, badge: null },
      ],
    },
    {
      title: "Engineering",
      items: [
        { name: "Monorepo architecture", icon: SiGit, badge: null },
        { name: "Performance profiling", icon: SiGit, badge: null },
        { name: "Debugging production issues", icon: SiGit, badge: null },
        { name: "Git, Sentry, Amplitude", icon: SiGit, badge: null },
        { name: "Android Studio, Xcode", icon: SiAndroidstudio, badge: null },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-dark-2 py-20 px-6 md:px-4 sm:px-3 overflow-hidden"
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
            Technical Stack
          </h2>
          <p className="text-light-3 mb-12 text-lg md:text-base sm:text-sm">
            Tools and technologies I work with
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={skillCardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-dark p-6 rounded-lg border border-dark-3 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer group"
            >
              <h3 className="text-xl font-semibold text-light mb-5 md:text-lg sm:text-base flex items-center gap-2">
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">▸</span>
                {skill.title}
              </h3>
              <ul className="space-y-3 text-light-2 md:text-sm">
                {skill.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.3 }}
                      whileHover={{ x: 4 }}
                      className="transition-all duration-200 cursor-default flex items-center gap-3 group/item"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 5 }} 
                        transition={{ duration: 0.2 }}
                        className="relative"
                      >
                        <IconComponent className="text-accent text-xl flex-shrink-0" />
                        {item.badge && (
                          <span className="absolute -top-1 -right-1 text-[8px] text-accent font-bold bg-dark rounded px-0.5">
                            {item.badge}
                          </span>
                        )}
                      </motion.div>
                      <span className="text-base md:text-sm group-hover/item:text-accent transition-colors duration-200">{item.name}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
