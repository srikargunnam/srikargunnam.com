"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [showCertificates, setShowCertificates] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const certificates = [
    {
      name: "Responsive Web Design Certificate from Quincy Larson - freecodecamp.org",
      url: "https://www.freecodecamp.org/certification/fcc8ed91408-a890-47a0-8cd4-3711918d2b20/responsive-web-design",
    },
    {
      name: "JavaScript Algorithms and Data Structures Certificate from Quincy Larson - freecodecamp.org",
      url: "https://www.freecodecamp.org/certification/fcc8ed91408-a890-47a0-8cd4-3711918d2b20/javascript-algorithms-and-data-structures",
    },
    {
      name: "JavaScript Basic Certificate from Mosh Hamedani - codewithmosh.com",
      url: "https://srikargunnam.com/certificates/certificate-of-completion-for-javascript-basics.pdf",
    },
    {
      name: "JavaScript Object Oriented Programming Certificate from Mosh Hamedani - codewithmosh.com",
      url: "https://srikargunnam.com/certificates/certificate-of-completion-for-object-oriented-programming-in-javascript.pdf",
    },
    {
      name: "Mastering React JS Certificate from Mosh Hamedani - codewithmosh.com",
      url: "https://srikargunnam.com/certificates/certificate-of-completion-for-mastering-react.pdf",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/srikargunnam/", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/srikargunnam/", icon: FaGithub },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative w-full min-h-screen bg-dark-2 py-20 px-6 md:px-4 sm:px-3 overflow-hidden">
      {/* Scroll-tied background effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(74, 158, 255, 0.15) 0%, transparent 70%)`,
          y: backgroundY,
        }}
      />

      <AnimatedSection className="relative max-w-4xl mx-auto z-10">
        <h2 className="text-4xl font-semibold text-light mb-6 border-b-2 border-accent pb-3 md:text-3xl sm:text-2xl">
          Contact
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xl text-light-2 mb-6 md:text-lg sm:text-base">
            Hey there! I'm always up for a chat.
          </p>
          <p className="text-lg text-light-3 mb-8 md:text-base sm:text-sm">
            Let's connect on social media or reach out if you'd like to collaborate on something interesting.
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-8 mb-16 md:gap-6 sm:gap-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-light-3 hover:text-accent transition-colors duration-200 text-lg md:text-base sm:text-sm font-medium group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="text-3xl md:text-2xl sm:text-xl" />
                </motion.div>
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </div>

        <div className="border-t border-dark-3 pt-8 mt-16">
          <div className="text-center mb-4">
            <motion.button
              onClick={() => setShowCertificates(!showCertificates)}
              whileHover={{ scale: 1.05, color: "#4a9eff" }}
              whileTap={{ scale: 0.95 }}
              className="text-light-3 hover:text-accent text-sm transition-colors duration-200"
            >
              {showCertificates ? "Hide" : "Show"} Certificates
            </motion.button>
          </div>
          {showCertificates && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 text-light-3 text-sm max-w-reading mx-auto"
            >
              {certificates.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-3 hover:text-accent transition-colors duration-200 underline"
                  >
                    {cert.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
          <p className="text-center text-light-3 text-sm mt-8">
            Copyright © {new Date().getFullYear()} Srikar Gunnam
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
