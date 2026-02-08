"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full h-16 fixed top-0 z-50 flex justify-end items-center px-6 md:px-4 sm:px-3 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-dark border-b border-dark-3"
            : "bg-dark-2/50 border-b border-dark-3/50"
        }`}
      >
        {/* Desktop Menu - Hidden on mobile */}
        <ul className="hidden md:flex list-none items-center gap-6 md:gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className={`relative text-sm font-medium no-underline transition-colors duration-200 md:text-xs ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-light-3 hover:text-light"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {activeSection !== item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/0"
                    whileHover={{ backgroundColor: "rgba(74, 158, 255, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button - Visible only on mobile */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-light-3 rounded transition-all"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-light-3 rounded transition-all"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-light-3 rounded transition-all"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-dark-2 border-l border-dark-3 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <ul className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <motion.a
                        href={`#${item.id}`}
                        onClick={handleLinkClick}
                        className={`relative text-lg font-medium no-underline transition-colors duration-200 block py-2 ${
                          activeSection === item.id
                            ? "text-accent"
                            : "text-light-3 hover:text-light"
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
