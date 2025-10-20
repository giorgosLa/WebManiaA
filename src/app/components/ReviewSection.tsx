"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ελένη Κ - CodeNest",
    text: "Η ομάδα τους δημιούργησε ένα website με εξαιρετικό design και άψογη λειτουργικότητα. Η συνεργασία ήταν απροβλημάτιστη!",
  },
  {
    name: "Γιώργος Π - SocialSpark",
    text: "Το νέο μας e-shop είναι γρήγορο, responsive και πολύ εύκολο στη χρήση. Η ομάδα ήταν πάντα διαθέσιμη και επαγγελματική.",
  },
  {
    name: "Μαρία Σ. - Αφοί Κωνσταντίνου Ο.Ε.",
    text: "Επαγγελματισμός και δημιουργικότητα σε κάθε στάδιο. Το website μας ξεχωρίζει αισθητικά και λειτουργικά.",
  },
  {
    name: "Νίκος Δ. - CleanPro Services",
    text: "Η ταχύτητα και το SEO του νέου μας site είναι άριστα. Η συνεργασία με την ομάδα ήταν ομαλή και αποτελεσματική.",
  },
  {
    name: "Αντώνης Β. - GreenFarm",
    text: "Το design και η UX/UI εμπειρία που παρέχουν είναι κορυφαία. Το website μας είναι πλέον εύχρηστο και μοντέρνο.",
  },
  {
    name: "Κατερίνα Μ. - Πρατήριο Άλφα",
    text: "Η διαδικασία ανάπτυξης ήταν ομαλή και η επικοινωνία άψογη. Το τελικό αποτέλεσμα ξεπέρασε τις προσδοκίες μας.",
  },
  {
    name: "Δήμητρα Λ. - Mitsis Rinela Hotel",
    text: "Ένα εντυπωσιακό website με responsive design που δουλεύει άψογα σε όλες τις συσκευές. Απόλυτα επαγγελματική ομάδα.",
  },
  {
    name: "Στέλιος Χ. - Favela Coffee",
    text: "Η συνεργασία ήταν άψογη και το τελικό αποτέλεσμα εκπληκτικό. Το site είναι μοντέρνο, λειτουργικό και εύκολο στη διαχείριση.",
  },
  {
    name: "Άννα Ρ. - TechSolutions",
    text: "Το νέο μας portal έχει εξαιρετικό design και είναι πλήρως responsive. Η ομάδα ήταν πάντα διαθέσιμη για κάθε αλλαγή.",
  },
  {
    name: "Πέτρος Γ. - WebCraft",
    text: "Ομαλή διαδικασία, γρήγορη παράδοση και άψογο αποτέλεσμα. Το website μας εντυπωσιάζει επισκέπτες και πελάτες.",
  },
  {
    name: "Χριστίνα Φ. - Digital Dreams",
    text: "Οι developers δημιούργησαν ένα website με υψηλή αισθητική και άριστη λειτουργικότητα. Συνεργασία απόλυτα επαγγελματική.",
  },
  {
    name: "Σοφία Ε. - MarketPlus",
    text: "Το website μας είναι γρήγορο, μοντέρνο και SEO-friendly. Η ομάδα ήταν πάντα υποστηρικτική και επικοινωνιακή.",
  },
  {
    name: "Μάριος Κ. - AutoLux",
    text: "Πραγματικά experts στο web development. Το site μας έχει υψηλές επιδόσεις και είναι εύχρηστο για τους χρήστες.",
  },
  {
    name: "Ιωάννα Τ. - BeautyGlow",
    text: "Η συνεργασία ήταν άψογη από την αρχή μέχρι το τέλος. Το design και η εμπειρία χρήστη είναι εκπληκτικά.",
  },
  {
    name: "Θανάσης Ζ. - FitLife Gym",
    text: "Το νέο μας website συνδυάζει όμορφο design και άριστη λειτουργικότητα. Η ομάδα ήταν πάντα πρόθυμη και επικοινωνιακή.",
  },
];

// Σπάμε reviews σε 3 στήλες
const columns = [0, 1, 2].map((col) => reviews.filter((_, i) => i % 3 === col));

function ReviewCard({ review }: { review: { name: string; text: string } }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl mb-6">
      <div className="flex mb-3">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <Star key={idx} className="w-5 h-5 text-blue-400 fill-blue-400" />
          ))}
      </div>
      <p className="text-gray-600 mb-4 italic">“{review.text}”</p>
      <p className="text-gray-800 from-neutral-900"> {review.name}</p>
    </div>
  );
}

function ReviewColumn({
  reviews,
  duration,
  delay,
}: {
  reviews: any[];
  duration: number;
  delay: number;
}) {
  // κάνουμε loop μόνο στο μισό (50%) για seamless flow
  const looped = [...reviews, ...reviews];

  return (
    <motion.div
      className="flex flex-col"
      animate={{ y: ["0%", "-50%"] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      {looped.map((r, i) => (
        <ReviewCard key={i} review={r} />
      ))}
    </motion.div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 
                     bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                     bg-clip-text text-transparent drop-shadow-glow"
        >
          Τι λένε οι πελάτες μας
        </h2>

        {/* Container με fixed ύψος για 4 reviews */}
        <div className="relative overflow-hidden" style={{ height: "650px" }}>
          {/* gradient πάνω */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent z-10" />
          {/* gradient κάτω */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-transparent z-10" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Αριστερή - λίγο πιο γρήγορη */}
            <ReviewColumn reviews={columns[0]} duration={25} delay={0} />
            {/* Μεσαία - πιο αργή */}
            <ReviewColumn reviews={columns[1]} duration={30} delay={1} />
            {/* Δεξιά - λίγο πιο γρήγορη */}
            <ReviewColumn reviews={columns[2]} duration={25} delay={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
