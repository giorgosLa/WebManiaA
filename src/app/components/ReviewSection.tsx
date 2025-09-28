"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ελένη Κ - CodeNest.",
    text: "Η ομάδα τους ανέβασε την online παρουσία μας σε άλλο επίπεδο! Οι καμπάνιες ήταν στοχευμένες και αποδοτικές.",
  },
  {
    name: "Γιώργος Π - SocialSpark.",
    text: "Εξαιρετική στρατηγική στο digital marketing. Οι πωλήσεις μας εκτοξεύτηκαν μέσα σε 2 μήνες.",
  },
  {
    name: "Μαρία Σ. - Αφοί Κωνσταντίνου Ο.Ε.",
    text: "Επαγγελματισμός και δημιουργικότητα. Μας βοήθησαν να ξεχωρίσουμε από τον ανταγωνισμό.",
  },
  {
    name: "Νίκος Δ. - CleanPro Services",
    text: "Απόλυτα αξιόπιστοι! Το SEO μας ανέβηκε στην κορυφή και οι οργανικές επισκέψεις διπλασιάστηκαν.",
  },
  {
    name: "Αντώνης Β. - GreenFarm",
    text: "Το social media management τους είναι κορυφαίο. Το engagement της σελίδας μας αυξήθηκε θεαματικά.",
  },
  {
    name: "Κατερίνα Μ. - Πρατήριο Άλφα",
    text: "Εξαιρετική ανάλυση δεδομένων και στρατηγική. Κάθε ευρώ που δώσαμε έπιασε τόπο.",
  },
  {
    name: "Δήμητρα Λ. - Mitsis Rinela Hotel",
    text: "Οι καμπάνιες Google Ads ήταν στοχευμένες και μας έφεραν νέους πελάτες συνεχώς.",
  },
  {
    name: "Στέλιος Χ. - Favela Coffee",
    text: "Η καλύτερη συνεργασία που είχαμε ποτέ με digital agency. Συστήνω ανεπιφύλακτα!",
  },
  {
    name: "Άννα Ρ. - TechSolutions",
    text: "Το content marketing τους είναι εξαιρετικό! Τα άρθρα μας φέρνουν leads κάθε μέρα.",
  },
  {
    name: "Πέτρος Γ. -  WebCraft",
    text: "Αναλυτικό report, ξεκάθαρη στρατηγική και εντυπωσιακά αποτελέσματα.",
  },
  {
    name: "Χριστίνα Φ.- Digital Dreams",
    text: "Επικοινωνιακοί και δημιουργικοί. Το brand μας απέκτησε νέα ταυτότητα online.",
  },
  {
    name: "Σοφία Ε. - MarketPlus",
    text: "Το email marketing τους έφερε καταπληκτικά conversions. Αξίζουν κάθε ευρώ.",
  },
  {
    name: "Μάριος Κ. - AutoLux",
    text: "Πραγματικά ειδικοί στο performance marketing. ROI πάνω από 300%!",
  },
  {
    name: "Ιωάννα Τ. - BeautyGlow",
    text: "Η ομάδα πάντα διαθέσιμη και πρόθυμη να απαντήσει σε κάθε απορία μας.",
  },
  {
    name: "Θανάσης Ζ. - FitLife Gym",
    text: "Αν θες να μεγαλώσεις την επιχείρησή σου online, αυτοί είναι οι κατάλληλοι άνθρωποι.",
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
