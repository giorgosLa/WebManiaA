"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Πολιτική Απορρήτου
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <p>
              Η προστασία των προσωπικών σας δεδομένων είναι εξαιρετικά
              σημαντική για εμάς. Η παρούσα Πολιτική Απορρήτου εξηγεί πώς
              συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας
              δεδομένα, σύμφωνα με τον Γενικό Κανονισμό για την Προστασία
              Δεδομένων (GDPR).
            </p>

            <h2 className="text-xl font-semibold text-gray-900">
              1. Υπεύθυνος Επεξεργασίας
            </h2>
            <p>
              Υπεύθυνος για την επεξεργασία των προσωπικών σας δεδομένων είναι η
              εταιρεία μας:
              <br /> <strong>Webmania</strong>, Αθήνα, Ελλάδα.
              <br /> Email επικοινωνίας:{" "}
              <a
                href="mailto:info@webmania.gr"
                className="text-blue-600 underline"
              >
                info@webmania.gr
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">
              2. Τι δεδομένα συλλέγουμε
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Όνομα και επώνυμο</li>
              <li>Email</li>
              <li>Περιεχόμενο μηνύματος που μας αποστέλλετε</li>
              <li>Διεύθυνση IP και βασικά τεχνικά στοιχεία χρήσης (logs)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">
              3. Σκοποί Επεξεργασίας
            </h2>
            <p>Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Επικοινωνία μαζί σας σχετικά με την αίτησή σας</li>
              <li>
                Απάντηση σε ερωτήσεις και παροχή πληροφοριών για τις υπηρεσίες
                μας
              </li>
              <li>Βελτίωση της ποιότητας των υπηρεσιών μας</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">
              4. Χρόνος Τήρησης Δεδομένων
            </h2>
            <p>
              Τα προσωπικά σας δεδομένα τηρούνται μόνο για το διάστημα που είναι
              απαραίτητο για την ολοκλήρωση της επικοινωνίας ή όσο απαιτείται
              από τη νομοθεσία.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">
              5. Δικαιώματα Χρηστών
            </h2>
            <p>
              Έχετε τα εξής δικαιώματα σχετικά με τα προσωπικά σας δεδομένα:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Δικαίωμα πρόσβασης</li>
              <li>Δικαίωμα διόρθωσης</li>
              <li>Δικαίωμα διαγραφής (“δικαίωμα στη λήθη”)</li>
              <li>Δικαίωμα περιορισμού επεξεργασίας</li>
              <li>Δικαίωμα φορητότητας δεδομένων</li>
              <li>Δικαίωμα εναντίωσης</li>
            </ul>
            <p>
              Για να ασκήσετε οποιοδήποτε από τα παραπάνω δικαιώματα, μπορείτε
              να επικοινωνήσετε μαζί μας στο{" "}
              <a
                href="mailto:info@webmania.gr"
                className="text-blue-600 underline"
              >
                info@webmania.gr
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold text-gray-900">6. Ασφάλεια</h2>
            <p>
              Λαμβάνουμε όλα τα απαραίτητα τεχνικά και οργανωτικά μέτρα για την
              προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη
              πρόσβαση, αλλοίωση ή απώλεια.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">7. Cookies</h2>
            <p>
              Η ιστοσελίδα μας χρησιμοποιεί cookies για τη βελτίωση της
              εμπειρίας χρήσης. Μπορείτε να επιλέξετε ή να αρνηθείτε τη χρήση
              τους μέσα από τις ρυθμίσεις του browser σας.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">
              8. Επικοινωνία
            </h2>
            <p>
              Για οποιαδήποτε απορία σχετικά με την Πολιτική Απορρήτου,
              επικοινωνήστε μαζί μας: <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@webmania.gr"
                className="text-blue-600 underline"
              >
                info@webmania.gr
              </a>
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Τελευταία ενημέρωση: Οκτώβριος 2025
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
