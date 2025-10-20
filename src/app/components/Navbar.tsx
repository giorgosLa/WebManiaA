"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#about", label: "Ποιοι είμαστε" },
    { href: "#services", label: "Υπηρεσίες" },
    { href: "#reviews", label: "Κριτικές" },
    { href: "#faq", label: "FAQs" },
  ];

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
            width={320}
            height={320}
            className="w-[160px] lg:w-[220px] h-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-16 text-sm font-bold relative z-10">
        {links.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="relative group"
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="relative text-lg font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300"
              >
                {item.label}

                {/* Gradient underline animation */}
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />

                {/* Subtle glow flare */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none blur-md bg-gradient-to-r from-blue-500/20 to-indigo-600/20" />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <motion.div
        className="hidden lg:flex relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl 
                 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 relative overflow-hidden"
          >
            {/* Glow sweep effect */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            />
            Επικοινωνήστε με την ομάδα μας
            <Mail size={18} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
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
          <>
            {/* Ημιδιάφανο φόντο */}
            <motion.div
              onClick={() => setIsOpen(false)} // ✅ πατάς έξω → κλείνει
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white/70 text- backdrop-blur-lg z-50 shadow-xl flex flex-col items-center justify-center gap-8"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={160}
                height={160}
                className="mb-6"
              />

              <Link
                href="#about"
                className="relative text-lg font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Ποιοι είμαστε
              </Link>
              <Link
                href="#services"
                className="relative text-lg font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Υπηρεσίες
              </Link>
              <Link
                href="#reviews"
                className="relative text-lg font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Κριτικές
              </Link>
              <Link
                href="#faq"
                className="relative text-lg font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                Επικοινωνήστε με την ομάδα μας <Mail size={18} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
