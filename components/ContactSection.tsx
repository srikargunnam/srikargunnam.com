"use client";

import { useState } from "react";

export default function ContactSection() {
  const [showCertificates, setShowCertificates] = useState(false);

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

  return (
    <section id="contact" className="w-full min-h-screen bg-white py-20 px-6 md:px-4 sm:px-3">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-12 border-b-2 border-black pb-3 md:text-3xl sm:text-2xl">
          Contact
        </h2>
        <div className="flex justify-center items-center gap-8 mb-16 md:gap-6 sm:gap-4">
          <a
            href="https://www.linkedin.com/in/srikargunnam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black transition-colors duration-200 text-lg md:text-base sm:text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/srikargunnam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-700 hover:text-black transition-colors duration-200 text-lg md:text-base sm:text-sm"
          >
            GitHub
          </a>
        </div>

        <div className="border-t border-grey-300 pt-8 mt-16">
          <div className="text-center mb-4">
            <button
              onClick={() => setShowCertificates(!showCertificates)}
              className="text-grey-600 hover:text-black text-sm transition-colors duration-200"
            >
              {showCertificates ? "Hide" : "Show"} Certificates
            </button>
          </div>
          {showCertificates && (
            <ul className="space-y-2 text-grey-700 text-sm max-w-reading mx-auto">
              {certificates.map((cert, index) => (
                <li key={index}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grey-600 hover:text-black transition-colors duration-200 underline"
                  >
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="text-center text-grey-500 text-sm mt-8">
            Copyright © {new Date().getFullYear()} Srikar Gunnam
          </p>
        </div>
      </div>
    </section>
  );
}
