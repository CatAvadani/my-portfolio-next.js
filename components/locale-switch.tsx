"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "sv" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.replace(segments.join("/") || "/", { scroll: false });
  };

  return (
    <button
      onClick={toggleLocale}
      className="fixed bottom-28 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 text-lg font-normal text-gray-500 dark:text-gray-200 z-50"
      aria-label="Toggle language"
    >
      {currentLocale === "en" ? "Sv" : "En"}
    </button>
  );
}
