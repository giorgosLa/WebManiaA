"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/vernikos.png", alt: "Vernicos Yachts" },
  { src: "/logos/logo2.png", alt: "Logo 2" },
  { src: "/logos/logo3.png", alt: "Logo 3" },
  { src: "/logos/logo4.png", alt: "Logo 4" },
  { src: "/logos/logo5.png", alt: "Logo 5" },
  { src: "/logos/logo6.png", alt: "Logo 6" },
  { src: "/logos/logo7.png", alt: "Logo 7" },
  { src: "/logos/logo8.png", alt: "Logo 8" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-lg font-medium text-gray-600 mb-10">Trusted by</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={120}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
