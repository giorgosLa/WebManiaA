"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Logo + Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={200}
              className="rounded shadow"
            />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-shimmer"
            >
              Digital Marketing Experience
            </motion.span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Οι ιδέες σας αξίζουν να γίνουν πράξη. Με αποδεδειγμένες Digital
            Marketing πρακτικές, τις μετατρέπουμε σε αποτελέσματα που μετρούν.
            Επικοινωνήστε μαζί μας και ας σχεδιάσουμε τη δική σας στρατηγική
            επιτυχίας.
          </p>
          <p className="text-gray-700 text-sm">
            Mediagram – Ηράκλειο Κρήτης, Ελλάδα
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Περιηγήσεις
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Ποιοι είμαστε
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Κριτικές
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="my-8 border-gray-200" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-sm text-gray-600">
        {/* Social Icons */}
        <div className="flex gap-6">
          <Link href="https://linkedin.com" className="hover:text-blue-600">
            <Linkedin size={20} />
          </Link>
          <Link href="https://instagram.com" className="hover:text-blue-600">
            <Instagram size={20} />
          </Link>
          <Link href="https://facebook.com" className="hover:text-blue-600">
            <Facebook size={20} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center">
          Mediagram Πνευματική Ιδιοκτησία {new Date().getFullYear()}. Όλα τα
          δικαιώματα προστατεύονται
        </p>
        <p className="text-center">Κατασκευάστηκε με ❤️ από την Mediagram</p>
        <p className="text-center text-xs text-gray-500">
          This website complies with GDPR and uses Google Analytics to collect
          non-personal data to enhance the user experience.
        </p>
      </div>
    </footer>
  );
}
