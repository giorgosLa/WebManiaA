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
    " Custom Web Development με σύγχρονες τεχνολογίες",
    " Responsive Design για άψογη εμπειρία σε όλες τις συσκευές",
    " Βελτιστοποίηση ταχύτητας & SEO από την αρχή",
    " Scalable αρχιτεκτονική για μελλοντική ανάπτυξη",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16 bg-gradient-to-r from-orange-50 to-white"
    >
      {/* Κείμενο */}
      <div className="flex-1 items-center text-center md:text-left">
        <div className="flex-1 items-center text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
            Μετατρέπουμε ιδέες σε{" "}
            <span className="inline-block min-w-[400px] max-w-full text-blue-600 whitespace-nowrap">
              <ReactTyped
                strings={[
                  "ψηφιακές εμπειρίες.",
                  "καινοτόμες λύσεις.",
                  "επιχειρηματική επιτυχία.",
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </span>
          </h1>

          <motion.p
            className="mt-4 text-lg font-medium max-w-2xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Σχεδιάζουμε και υλοποιούμε{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
              custom λύσεις web development
            </span>{" "}
            που{" "}
            <span className="font-semibold text-blue-600">εντυπωσιάζουν</span>,
            αυξάνουν{" "}
            <span className="font-semibold text-indigo-600">engagement</span>{" "}
            και φέρνουν
            <span className="font-semibold text-blue-500">
              {" "}
              πραγματικά αποτελέσματα
            </span>{" "}
            για την επιχείρησή σου.
          </motion.p>
        </div>

        {/* Animated list */}
        <ul className="mt-6 space-y-4 text-gray-700 max-w-xl">
          {listItems.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: i * 0.2 + 0.8,
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                scale: 1.05,
                x: 4,
                color: "#4F46E5", // Indigo-600 hover color
                transition: { duration: 0.3 },
              }}
              className="relative pl-8 cursor-pointer"
            >
              {/* Animated bullet */}
              <motion.span
                className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: i * 0.2 + 1,
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
              />
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
