"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav className="relative w-full flex items-center justify-between px-6 py-4 transition-colors duration-500 bg-[#fff7f0] overflow-visible">
      {/* Fade-out κάτω */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-[#fff7f0] to-transparent" />

      {/* Logo */}
      <div className="flex-shrink-0 ml-6 lg:ml-8">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={240}
            height={240}
            className="w-[160px] lg:w-[220px] h-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-20 text-sm font-bold relative z-10">
        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
        >
          Ποιοι είμαστε
        </Link>

        <Link
          href="#services"
          onClick={() => setIsOpen(false)}
          className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
        >
          Υπηρεσίες
        </Link>

        <Link
          href="#reviews"
          onClick={() => setIsOpen(false)}
          className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
        >
          Κριτικές
        </Link>
        <Link
          href="#faq"
          onClick={() => setIsOpen(false)}
          className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
        >
          FAQs
        </Link>
      </div>
      {/* <LanguageToggle /> */}

      {/* Desktop Button */}
      <div className="hidden lg:flex relative z-10">
        <Link
          href="#contact"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Επικοινωνήστε με την ομάδας μας <Mail size={18} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-10"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-gray-800 rounded"
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 w-3/4 sm:w-1/2 
             bg-white/60 backdrop-blur-md z-50 
             flex flex-col items-center justify-center gap-10 shadow-2xl"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={220}
                height={220}
                className="w-[180px] h-auto mb-6"
              />
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Ποιοι είμαστε
            </Link>

            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Υπηρεσίες
            </Link>

            <Link
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Κριτικές
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              FAQs
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Επικοινωνήστε με την ομάδα μας <Mail size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
