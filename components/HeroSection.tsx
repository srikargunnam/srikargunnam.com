"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.05, 0.08]);

    useEffect(() => {
        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative flex flex-col justify-center items-center w-full min-h-screen bg-dark pt-24 pb-20 px-6 md:px-4 sm:px-3 overflow-hidden"
        >
            {/* Scroll-tied animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 158, 255, 0.3) 0%, transparent 50%)`,
                    y: backgroundY,
                }}
            />

            {/* Scroll-tied grid pattern overlay */}
            <motion.div
                className="absolute inset-0"
                style={{
                    opacity: gridOpacity,
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    y: backgroundY,
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative max-w-4xl mx-auto text-center z-10"
            >
                {/* Friendly Greeting */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl text-light-2 mb-4 md:text-lg sm:text-base"
                >
                    👋 Hi, I'm
                </motion.p>

                {/* Profile Picture */}
                <motion.div
                    variants={imageVariants}
                    className="mb-6 flex justify-center"
                >
                    <motion.div
                        className="relative"
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(74, 158, 255, 0.4)",
                                    "0 0 0 10px rgba(74, 158, 255, 0)",
                                    "0 0 0 0 rgba(74, 158, 255, 0)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="absolute inset-0 rounded-full"
                        />
                        <div className="relative w-32 h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-accent/30 hover:border-accent/60 transition-all duration-300 cursor-pointer">
                            <Image
                                src="/media/SrikarProfilePic.jpeg"
                                alt="Srikar Gunnam"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-3xl font-semibold text-light mb-6 md:text-2xl sm:text-xl"
                >
                    Srikar Gunnam
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-4xl font-bold text-light mb-4 md:text-3xl sm:text-2xl"
                >
                    Full-Stack Software Engineer
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-xl text-light-2 mb-4 max-w-reading mx-auto leading-relaxed md:text-lg sm:text-base"
                >
                    I build production-grade mobile and web applications using React, React Native, and NestJS. Currently scaling systems that serve tens of thousands of users.
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-lg text-light-3 max-w-reading mx-auto md:text-base sm:text-sm"
                >
                    Software Engineer II at Game Theory, focused on scalable frontend systems, mobile performance optimization, and reliable end-to-end delivery.
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-light-3"
                >
                    <span className="text-xs">Scroll</span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
