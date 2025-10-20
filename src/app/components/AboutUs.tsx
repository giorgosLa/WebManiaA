"use client";

import { motion } from "framer-motion";
import { TrendingUp, Rocket, Brain } from "lucide-react";

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
            className="text-3xl md:text-4xl font-extrabold text-center mb-14 
                     bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                     bg-clip-text text-transparent drop-shadow-glow"
          >
            Ποιοι Είμαστε
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Στη <span className="font-semibold text-blue-600">Webmania</span>{" "}
            εξειδικευόμαστε στη δημιουργία σύγχρονων websites και e-shops που
            ξεχωρίζουν για την αισθητική, την ταχύτητα και την απόδοσή τους.
            Συνδυάζουμε design, τεχνολογία και στρατηγική για να προσφέρουμε
            digital εμπειρίες που αυξάνουν πωλήσεις και χτίζουν εμπιστοσύνη.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Από μικρές επιχειρήσεις μέχρι αναπτυσσόμενα brands, δημιουργούμε{" "}
            <span className="font-medium text-indigo-600">
              custom development λύσεις με έμφαση στην ταχύτητα και άριστο SEO
            </span>
            , εστιάζοντας σε UX/UI σχεδιασμό και υψηλές επιδόσεις.
          </p>

          {/* Highlights List */}
          <ul className="text-left space-y-4 mt-8">
            <li className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-gray-700">
                Αύξηση conversion rate σε e-shops έως{" "}
                <span className="font-semibold">+150%</span> με βελτιστοποίηση
                UX.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-purple-600 mt-1" />
              <span className="text-gray-700">
                Ταχύτατα websites με{" "}
                <span className="font-semibold">Google PageSpeed 90+</span>{" "}
                score.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-indigo-600 mt-1" />
              <span className="text-gray-700">
                Στρατηγικός σχεδιασμός περιεχομένου και responsive design για{" "}
                <span className="font-semibold">
                  άψογη εμπειρία σε κάθε συσκευή
                </span>
                .
              </span>
            </li>
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-extrabold text-blue-600">60+</h3>
              <p className="text-sm text-gray-500 mt-1">Websites & E-shops</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-extrabold text-blue-600">95%</h3>
              <p className="text-sm text-gray-500 mt-1">
                Επαναλαμβανόμενοι Πελάτες
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
