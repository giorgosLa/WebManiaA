"use client";

import {
  Globe,
  Code,
  ShoppingCart,
  Server,
  Layout,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: "Κατασκευή Ιστοσελίδων",
    desc: "Σχεδιάζουμε και αναπτύσσουμε δυναμικές, γρήγορες και πλήρως responsive ιστοσελίδες που εντυπωσιάζουν και αποδίδουν.",
  },
  {
    icon: <Code className="w-10 h-10 text-green-600" />,
    title: "Custom Web Applications",
    desc: "Αναπτύσσουμε εξατομικευμένες web εφαρμογές για επιχειρήσεις που χρειάζονται λύσεις προσαρμοσμένες στις ανάγκες τους.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-red-600" />,
    title: "E-Commerce Development",
    desc: "Δημιουργούμε eshops με έμφαση στη λειτουργικότητα, την ασφάλεια και την εμπειρία του χρήστη — Shopify, WooCommerce ή custom λύσεις.",
  },
  {
    icon: <Server className="w-10 h-10 text-indigo-600" />,
    title: "Backend Development",
    desc: "Χτίζουμε ισχυρά APIs και βάσεις δεδομένων που εξασφαλίζουν ταχύτητα, ασφάλεια και επεκτασιμότητα.",
  },
  {
    icon: <Layout className="w-10 h-10 text-orange-600" />,
    title: "UI/UX Design",
    desc: "Σχεδιάζουμε εμπειρίες που ξεχωρίζουν — με έμφαση στην ευχρηστία, την αισθητική και τη μετατροπή επισκεπτών σε πελάτες.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-yellow-500" />,
    title: "Συντήρηση & Υποστήριξη",
    desc: "Παρέχουμε συνεχή τεχνική υποστήριξη, αναβαθμίσεις και monitoring για να λειτουργεί η ιστοσελίδα σου απρόσκοπτα.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 
                     bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                     bg-clip-text text-transparent drop-shadow-glow"
        >
          Υπηρεσίες
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
