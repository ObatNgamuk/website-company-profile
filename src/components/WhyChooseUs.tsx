import React from "react";
import { whyChooseUsItems } from "../data";
import { Icon } from "./Icon";
import { motion } from "motion/react";

interface WhyChooseUsProps {
  lang: "id" | "en";
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="why" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Visual background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading + Interactive Schematics */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
              {lang === "id" ? "04. KEUNGGULAN UTAMA" : "04. COMPETITIVE ADVANTAGE"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
              Why Choose <span className="text-brand-cyan">Us?</span>
            </h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full"></div>
            
            <p className="font-sans text-gray-300 text-sm sm:text-base mt-6 leading-relaxed">
              {lang === "id"
                ? "Kami berkomitmen menghadirkan keunggulan rekayasa perangkat keras dan integrasi algoritma AI termutakhir demi memastikan keberhasilan transformasi digital rantai pasok Anda."
                : "We are committed to delivering engineering excellence with advanced algorithmic safeguards, ensuring your business stays miles ahead of the industrial curve."}
            </p>

            {/* Simulated Live Tech Telemetry Board (Aesthetic design pairing) */}
            <div className="mt-8 p-6 rounded-xl bg-brand-dark-card border border-brand-cyan/25 w-full font-mono text-xs text-brand-cyan/80 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-cyan/5 rounded-full filter blur-xl" />
              <div className="flex items-center justify-between border-b border-brand-cyan/10 pb-1.5">
                <span className="text-white font-bold">ROBOTECH ENGINE STATUS</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">LIVE</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>CLIENT RETENTION</span>
                  <span className="text-white">99.78%</span>
                </div>
                <div className="flex justify-between">
                  <span>AVERAGE INTEGRATION VELOCITY</span>
                  <span className="text-white">18.4 DAYS</span>
                </div>
                <div className="flex justify-between">
                  <span>STRESS TOLERANCE RATIO</span>
                  <span className="text-white">MIL-STD-810H OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Core Values list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {whyChooseUsItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-brand-cyan/15 group relative transition-all duration-300 hover:-translate-y-1"
              >
                {/* Micro corner indicators (Industrial blueprint style) */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-brand-cyan/20 group-hover:border-brand-cyan/60 transition-colors" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-brand-cyan/20 group-hover:border-brand-cyan/60 transition-colors" />

                {/* Card Icon */}
                <div className="p-3.5 rounded-xl bg-brand-cyan/5 text-brand-cyan border border-brand-cyan/15 w-12 h-12 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300">
                  <Icon name={item.iconName} size={22} />
                </div>

                {/* Heading */}
                <h3 className="font-display font-bold text-lg text-white mt-5 group-hover:text-brand-cyan transition-colors">
                  {lang === "id" ? item.title : item.titleEn}
                </h3>

                {/* Subtext */}
                <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                  {lang === "id" ? item.description : item.descriptionEn}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
