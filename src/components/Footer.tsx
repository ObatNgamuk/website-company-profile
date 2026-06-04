import React from "react";
import { companyName, navigationLinks, services } from "../data";
import { Icon } from "./Icon";

interface FooterProps {
  lang: "id" | "en";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer id="footer" className="relative bg-brand-dark overflow-hidden px-6 lg:px-12 pt-20 pb-10 border-t border-brand-cyan/20">
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 right-12 w-0.5 h-full bg-brand-cyan/5 border-r border-dashed border-brand-cyan/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          {/* Column 1: Brand & Logo & Corporate copy */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded bg-brand-cyan/15 border border-brand-cyan">
                <Icon name="Cpu" className="text-brand-cyan" size={18} />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                ROBO<span className="text-brand-cyan">TECH</span>
              </span>
            </a>

            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mt-2">
              {lang === "id"
                ? "Pionir rekayasa robotika industri pintar berbasis kecerdasan buatan, sistem otonom presisi tinggi, dan modul industri digital terpadu."
                : "Engineered in Jakarta for world-class facilities. We manufacture enterprise robots, secure smart process nodes, and high-precision systems."}
            </p>

            {/* Social Medias */}
            <div className="flex items-center gap-3.5 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan border border-transparent transition-colors">
                <Icon name="Linkedin" size={16} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="p-2 rounded bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan border border-transparent transition-colors">
                <Icon name="Phone" size={16} />
              </a>
              <a href="mailto:solutions@robotech.com" className="p-2 rounded bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan border border-transparent transition-colors">
                <Icon name="Mail" size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-widest font-bold mb-6">
              {lang === "id" ? "PETA SITUS" : "NAVIGATION"}
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-gray-400">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services overview */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-widest font-bold mb-6">
              {lang === "id" ? "LAYANAN UTAMA" : "DEPARTMENTS"}
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-gray-400">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-brand-cyan transition-colors">
                    {lang === "id" ? service.title : service.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter or Micro summary */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-widest font-bold mb-6">
              SUBSCRIBE INTEL
            </h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
              Get our monthly briefing on automated production lines and deep tech releases.
            </p>
            <div className="flex w-full rounded border border-brand-cyan/20 overflow-hidden bg-brand-dark/40">
              <input
                type="email"
                placeholder="tech@firm.com"
                className="w-full bg-transparent px-3 py-2 text-xs text-white focus:outline-none"
              />
              <button className="px-3 bg-brand-cyan text-brand-dark hover:bg-white transition-colors">
                <Icon name="ArrowRight" size={12} />
              </button>
            </div>
          </div>

        </div>

        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] font-mono text-gray-500 gap-4">
          <p>© 2026 {companyName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-brand-cyan">Privacy Strategy</a>
            <a href="#about" className="hover:text-brand-cyan">Operational Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
