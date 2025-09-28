"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white text-center px-6">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Η σελίδα δεν βρέθηκε
        </h2>
        <p className="mt-2 text-gray-600 max-w-md">
          Η σελίδα που προσπαθείς να επισκεφτείς δεν υπάρχει ή έχει μετακινηθεί.
        </p>

        {/* CTA */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white text-sm font-medium shadow-md hover:bg-blue-700 transition"
          >
            Επιστροφή στην Αρχική
          </Link>
        </div>
      </main>
    </>
  );
}
