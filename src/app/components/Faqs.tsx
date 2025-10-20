"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";
import faqAnimation from "../../../public/digital2.json";

const faqs = [
  {
    question: "Τι είναι μια υπηρεσία Web Development;",
    answer:
      "Οι υπηρεσίες Web Development περιλαμβάνουν τον σχεδιασμό, την ανάπτυξη και τη συντήρηση websites ή web εφαρμογών, με στόχο τη δημιουργία γρήγορων, λειτουργικών και μοντέρνων digital προϊόντων.",
  },
  {
    question: "Γιατί χρειάζομαι custom web development για την επιχείρησή μου;",
    answer:
      "Μια custom λύση εξασφαλίζει ότι το website ή η web εφαρμογή σας θα καλύπτει απόλυτα τις ανάγκες σας, θα είναι γρήγορο, ασφαλές, SEO-friendly και πλήρως προσαρμοσμένο στο brand σας.",
  },
  {
    question: "Πόσο γρήγορα θα είναι έτοιμο το website μου;",
    answer:
      "Ο χρόνος ολοκλήρωσης εξαρτάται από την πολυπλοκότητα του project. Ένα απλό website μπορεί να ολοκληρωθεί σε 3-4 εβδομάδες, ενώ πιο σύνθετες εφαρμογές απαιτούν περισσότερο χρόνο και φάσεις ανάπτυξης.",
  },
  {
    question: "Τι περιλαμβάνει μια διαδικασία ανάπτυξης website;",
    answer:
      "Σχεδιασμό UX/UI, ανάπτυξη custom features, responsive design, SEO optimization, testing σε όλες τις συσκευές και browsers, και υποστήριξη μετά την παράδοση.",
  },
  {
    question: "Πόσο κοσκκκτίζει ένα website ή μια web εφαρμογή;",
    answer:
      "Το κόστος εξαρτάται από τις ανάγκες και την πολυπλοκότητα του project. Παράγοντες όπως custom development, design, number of pages και λειτουργικότητες καθορίζουν το τελικό budget.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 
        ${open ? "bg-white/70 shadow-xl" : "bg-white/40 hover:bg-white/60"} 
        backdrop-blur-md border border-transparent 
        hover:border-blue-200`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl font-semibold text-blue-800">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 mt-4 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQs() {
  return (
    <section
      id="faq"
      className="py-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 
                     bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                     bg-clip-text text-transparent"
        >
          Συχνές Ερωτήσεις (FAQs)
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation */}
          <div className="flex justify-center">
            <Lottie animationData={faqAnimation} loop className="w-full " />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
