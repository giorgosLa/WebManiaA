"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Rocket, Brain } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20"
    >
      {/* Διακοσμητικά στοιχεία */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-8 
                       bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                       bg-clip-text text-transparent drop-shadow-sm"
          >
            Ποιοι Είμαστε
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Στη <span className="font-semibold text-blue-600">Mediagram</span>{" "}
            πιστεύουμε πως κάθε brand αξίζει να ξεχωρίζει. Είμαστε μια δυναμική
            ομάδα digital marketers, δημιουργικών και στρατηγικών αναλυτών που
            μοιράζονται ένα κοινό πάθος: να μετατρέπουν ιδέες σε αποτελέσματα.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Με εμπειρία σε{" "}
            <span className="font-medium text-indigo-600">
              social media, performance marketing και branding
            </span>
            , έχουμε συνεργαστεί με δεκάδες επιχειρήσεις — από startups μέχρι
            καθιερωμένες εταιρείες — βοηθώντας να αυξήσουν τις πωλήσεις τους, να
            ενισχύσουν την online παρουσία τους και να αποκτήσουν πιστό κοινό.
          </p>

          {/* Highlights List */}
          <ul className="text-left space-y-4 mt-8">
            <li className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-gray-700">
                Αύξηση πωλήσεων e-shop έως και{" "}
                <span className="font-semibold">+200%</span> σε λιγότερο από 6
                μήνες.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-purple-600 mt-1" />
              <span className="text-gray-700">
                Επιτυχημένες καμπάνιες σε Meta & Google Ads με{" "}
                <span className="font-semibold">πολλαπλασιαστικό ROI</span>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-indigo-600 mt-1" />
              <span className="text-gray-700">
                Δημιουργία ολοκληρωμένων στρατηγικών περιεχομένου που δίνουν
                στις μάρκες{" "}
                <span className="font-semibold">μοναδική ταυτότητα</span>.
              </span>
            </li>
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-extrabold text-blue-600">45+</h3>
              <p className="text-sm text-gray-500 mt-1">Projects</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-extrabold text-blue-600">98%</h3>
              <p className="text-sm text-gray-500 mt-1">Ικανοποίηση Πελατών</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
