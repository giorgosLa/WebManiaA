"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError(false);
    setSent(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setSent(true);
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
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
                <span className="font-semibold">+30 210 1234567</span>
              </li>
              <li>
                📧 Email:{" "}
                <span className="font-semibold">info@mediagram.gr</span>
              </li>
              <li>
                📍 Διεύθυνση:{" "}
                <span className="font-semibold">Αθήνα, Ελλάδα</span>
              </li>
            </ul>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
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

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition disabled:opacity-50"
              >
                {loading ? "Αποστολή..." : "Αποστολή Μηνύματος"}
              </motion.button>

              {sent && (
                <p className="text-green-600 text-sm mt-2">
                  ✅ Το μήνυμα στάλθηκε με επιτυχία!
                </p>
              )}
              {error && (
                <p className="text-red-600 text-sm mt-2">
                  ❌ Παρουσιάστηκε σφάλμα. Δοκίμασε ξανά.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
