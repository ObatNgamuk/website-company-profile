import React, { useState, useEffect } from "react";
import { companyName, navigationLinks } from "../data";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLabels: Record<string, Record<string, string>> = {
    Beranda: { id: "Beranda", en: "Home" },
    "Tentang Kami": { id: "Tentang Kami", en: "About Us" },
    Layanan: { id: "Layanan", en: "Services" },
    Produk: { id: "Produk", en: "Products" },
    Teknologi: { id: "Teknologi", en: "Technology" },
    Portofolio: { id: "Portofolio", en: "Portfolio" },
    Artikel: { id: "Artikel", en: "Insights" },
    Kontak: { id: "Kontak", en: "Contact" }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 ${
        scrolled
          ? "bg-brand-dark/80 backdrop-blur-md border-b border-brand-cyan/20 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-cyan/20 to-brand-cyan border border-brand-cyan overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)]">
            <Icon name="Cpu" className="text-white group-hover:rotate-180 transition-transform duration-500" size={20} />
            <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            ROBO<span className="text-brand-cyan">TECH</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navigationLinks.map((link) => {
              const label = navLabels[link.label]?.[lang] || link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans font-medium text-sm text-gray-300 hover:text-brand-cyan hover:text-glow-dim transition-colors duration-200"
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Lang Selector & CTA */}
          <div className="flex items-center gap-4 border-l border-gray-700 pl-6">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="px-3 py-1 text-xs font-mono rounded border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/10 transition-colors"
            >
              {lang === "id" ? "IND 🇮🇩" : "ENG 🇬🇧"}
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-mono font-medium rounded-md bg-brand-cyan text-brand-dark hover:bg-white hover:shadow-[0_0_20px_rgba(0,191,255,0.6)] hover:scale-105 transition-all duration-300"
            >
              {lang === "id" ? "KONSULTASI" : "CONSULT NOW"}
            </a>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="px-2.5 py-0.5 text-xs font-mono rounded border border-brand-cyan/30 text-brand-cyan"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-brand-dark-card border border-brand-cyan/20 text-white transition-colors"
          >
            <Icon name={isOpen ? "X" : "Menu"} className="text-brand-cyan" size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-lg border-b border-brand-cyan/20 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navigationLinks.map((link) => {
                const label = navLabels[link.label]?.[lang] || link.label;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans font-medium text-base text-gray-300 hover:text-brand-cyan hover:pl-2 transition-all duration-200"
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 mt-2 text-sm font-mono font-medium rounded-md bg-brand-cyan text-brand-dark hover:bg-white transition-colors"
              >
                {lang === "id" ? "KONSULTASI SEKARANG" : "REQUEST CONSULTATION"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
