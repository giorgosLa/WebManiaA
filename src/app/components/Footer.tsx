"use client";

import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Subscribed successfully!");
      setEmail("");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-48 h-20 overflow-hidden flex items-center justify-center bg-white p-2 rounded-full shadow-md">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={320}
                height={320}
                className="w-[160px] lg:w-[220px] h-auto"
              />
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm text-gray-400 mb-8">
          Video provides a powerful way to help you prove your point. When you
          click Online.
        </p>

        {/* Newsletter */}
        <h3 className="text-xl font-semibold mb-3 text-white">
          Subscribe to our newsletter
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Stay up to date with the latest news and updates.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-4  space-y-3"
        >
          <div className="flex w-full justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full max-w-xs px-4 py-2 rounded-l-md text-gray-900 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 hover: cursor-pointer text-white px-5 py-2 rounded-r-md font-medium transition-transform duration-200 hover:scale-[1.02] shadow-md"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 m-10">
        <a href="#" className="hover:text-blue-500">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-sky-400">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-blue-600">
          <Linkedin size={20} />
        </a>
        <a href="#" className="hover:text-pink-500">
          <Instagram size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 justify-center flex mt-4">
        © 2025 Webmania. All rights reserved.
      </p>

      {/* Links, Social Icons & Copyright... (παραμένουν όπως τα είχες) */}
    </footer>
  );
}
