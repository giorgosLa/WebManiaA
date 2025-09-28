"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import digital from "../../../public/digital.json";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const listItems = [
    "✔️ Εξειδίκευση σε B2C & B2B, Ελλάδα και εξωτερικό",
    "✔️ Απόλυτη εστίαση σε ανάπτυξη, όχι απλώς παρουσία",
    "✔️ Holistic Marketing για Business Growth",
    "✔️ Tailored λύση για κάθε σου πρόκληση",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16 bg-gradient-to-r from-orange-50 to-white"
    >
      {/* Κείμενο */}
      <div className="flex-1 items-center text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
          Όλη η{" "}
          <span className=" inline-block min-w-[280px] text-blue-600 items-center">
            <ReactTyped
              strings={["Στρατηγική", "Ανάπτυξη", "Υλοποίηση"]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </span>{" "}
          που χρειάζεσαι, από επαγγελματίες που συνδυάζουν{" "}
          <span className="text-gray-900">γνώση και πραγματικό ενδιαφέρον</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 font-medium">
          Αναλαμβάνουμε την ανάπτυξη της επιχείρησής σου με ολοκληρωμένες λύσεις
          digital marketing που φέρνουν μετρήσιμα αποτελέσματα.
        </p>

        {/* Animated list */}
        <ul className="mt-6 space-y-2 text-gray-700">
          {listItems.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: listItems.length * 0.3 + 0.5, duration: 0.5 }}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-orange-700 transition"
        >
          ΑΣ ΜΙΛΗΣΟΥΜΕ
        </motion.button>
      </div>
      {/* Εικόνα */}
      <div ref={imageRef} className="flex-1 flex justify-center">
        <Lottie animationData={digital} loop={true} />
      </div>
    </section>
  );
}
