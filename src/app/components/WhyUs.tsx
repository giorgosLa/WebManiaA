"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Briefcase,
  BarChart3,
  Rocket,
  ShieldCheck,
  Monitor,
  Cpu,
} from "lucide-react";

// ✅ Dynamic import για να αποφύγουμε SSR errors
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const advantages = [
  {
    icon: <Briefcase className="w-10 h-10 text-blue-500 drop-shadow-glow" />,
    title: "Custom Development",
    desc: "Προσαρμοσμένες λύσεις για κάθε επιχείρηση χωρίς περιορισμούς πλατφορμών.",
    value: 100,
    suffix: "%",
  },
  {
    icon: <Rocket className="w-10 h-10 text-green-500 drop-shadow-glow" />,
    title: "High Performance",
    desc: "Γρήγορες ιστοσελίδες και web apps με optimized κώδικα για άριστη εμπειρία χρήστη.",
    value: 100,
    suffix: "%",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple-500 drop-shadow-glow" />,
    title: "SEO Optimized",
    desc: "Ιστοσελίδες σχεδιασμένες για άριστη SEO απόδοση και υψηλή οργανική επισκεψιμότητα.",
    value: 100,
    suffix: "%",
  },
  {
    icon: (
      <ShieldCheck className="w-10 h-10 text-orange-500 drop-shadow-glow" />
    ),
    title: "Security & Maintenance",
    desc: "Ασφαλή websites με συνεχή υποστήριξη, updates και προστασία από απειλές.",
    value: 99,
    suffix: "%",
  },
  {
    icon: <Monitor className="w-10 h-10 text-indigo-500 drop-shadow-glow" />,
    title: "Responsive Design",
    desc: "Ιστοσελίδες πλήρως responsive σε desktop, tablet και κινητά.",
    value: 100,
    suffix: "%",
  },
  {
    icon: <Cpu className="w-10 h-10 text-teal-500 drop-shadow-glow" />,
    title: "UX/UI Excellence",
    desc: "User-friendly και ελκυστικό design που αυξάνει engagement και conversions.",
    value: 95,
    suffix: "%",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 
                     bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                     bg-clip-text text-transparent drop-shadow-glow"
        >
          Πλεονεκτήματα – Γιατί εμάς
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition 
                         flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition">
                {adv.icon}
              </div>

              {/* Counter */}
              <div className="text-3xl font-extrabold text-blue-600 mb-2">
                <CountUp start={0} end={adv.value} duration={2} enableScrollSpy>
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                {adv.suffix}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                {adv.title}
              </h3>
              <p className="text-gray-600 text-sm">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
