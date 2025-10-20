"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false); // ✅ switch state

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!accepted) {
      toast.error("Πρέπει να αποδεχτείς τους όρους απορρήτου!");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(formRef.current);
      const user_email = formData.get("user_email");
      const user_name = formData.get("user_name");
      const message = formData.get("message");

      // 🔹 Στείλε στο API Route σου
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user_name,
          email: user_email,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Αποτυχία αποστολής");
      }

      // 🔹 Συνδρομή στο Mailchimp (προαιρετικό βήμα)
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user_email, name: user_name }),
      });

      toast.success("Το μήνυμα στάλθηκε με επιτυχία!");
      formRef.current.reset();
      setAccepted(false); // reset switch
    } catch (err) {
      console.error("Error:", err);
      toast.error("Κάτι πήγε στραβά, δοκίμασε ξανά!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- Text side --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Επικοινώνησε μαζί μας
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Έχεις απορίες ή θέλεις να ξεκινήσεις τη συνεργασία μας; Συμπλήρωσε
              τη φόρμα και η ομάδα μας θα σε καλέσει σύντομα για να συζητήσουμε
              τις ανάγκες σου.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                📞 Τηλέφωνο:{" "}
                <span className="font-semibold">+30 6945511792</span>
              </li>
              <li>
                📧 Email:{" "}
                <span className="font-semibold">info@webmania.gr</span>
              </li>
              <li>
                📍 Διεύθυνση:{" "}
                <span className="font-semibold">Αθήνα, Ελλάδα</span>
              </li>
            </ul>
          </motion.div>

          {/* --- Form side --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  placeholder=" "
                  required
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                             bg-white/70 placeholder-transparent text-gray-800"
                />
                <label
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                             peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                             peer-placeholder-shown:text-gray-400 peer-focus:top-2 
                             peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Όνομα
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  placeholder=" "
                  required
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                             bg-white/70 placeholder-transparent text-gray-800"
                />
                <label
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                             peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                             peer-placeholder-shown:text-gray-400 peer-focus:top-2 
                             peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  placeholder=" "
                  required
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                             bg-white/70 placeholder-transparent text-gray-800"
                />
                <label
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                             peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                             peer-placeholder-shown:text-gray-400 peer-focus:top-2 
                             peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Μήνυμα
                </label>
              </div>

              {/* ✅ Privacy Switch */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAccepted(!accepted)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition 
                             ${accepted ? "bg-green-500" : "bg-gray-300"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition 
                                ${accepted ? "translate-x-6" : ""}`}
                  ></div>
                </button>
                <span className="text-sm text-gray-600">
                  Αποδέχομαι τους{" "}
                  <a href="/privacy" className="text-blue-600 underline">
                    όρους απορρήτου
                  </a>
                </span>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition disabled:opacity-50"
              >
                {loading ? "Αποστολή..." : "Αποστολή Μηνύματος"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
