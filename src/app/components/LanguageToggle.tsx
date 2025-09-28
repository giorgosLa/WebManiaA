import { useState } from "react";
import Image from "next/image";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "gr">("gr");

  const toggleLang = () => {
    setLang(lang === "gr" ? "en" : "gr");
    // εδώ μπορείς να καλέσεις router.push(`/en/...`) ή i18n.changeLanguage(lang)
  };

  return (
    <button
      onClick={toggleLang}
      className="w-10 h-10 rounded-full overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition hidden lg:flex items-center gap-20 text-sm font-bold relative z-10"
    >
      {lang === "gr" ? (
        <Image src="/uk.svg" alt="English" width={60} height={60} />
      ) : (
        <Image src="/gr.svg" alt="Ελληνικά" width={60} height={60} />
      )}
    </button>
  );
}
