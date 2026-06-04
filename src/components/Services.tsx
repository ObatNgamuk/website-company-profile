import React from "react";
import { services } from "../data";
import { Icon } from "./Icon";
import { motion } from "motion/react";

interface ServicesProps {
  lang: "id" | "en";
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="services" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Absolute floating lights */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-blue-accent/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "02. LAYANAN UNGGULAN" : "02. CORE SERVICES"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Our <span className="text-brand-cyan">Services</span>
          </h2>
          <div className="h-1 w-16 bg-brand-cyan mt-4 mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === "id"
              ? "Kami menghadirkan portofolio ekosistem otomatisasi masa depan terintegrasi penuh untuk mendigitalkan industri Anda."
              : "We provide an integrated ecosystem of futuristic automation solutions designed to propel your industrial operation ahead."}
          </p>
        </div>

        {/* Services Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="glass-card glass-card-hover p-8 rounded-2xl relative group overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Corner Glow Effect on Card Hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-cyan/10 rounded-full filter blur-xl group-hover:bg-brand-cyan/20 transition-all duration-500" />

              <div>
                {/* Icon Container */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300 mb-6">
                  <Icon name={service.iconName} size={26} />
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-cyan transition-colors duration-200">
                  {lang === "id" ? service.title : service.titleEn}
                </h3>

                {/* Service Description */}
                <p className="font-sans text-sm text-gray-400 mt-3.5 leading-relaxed">
                  {lang === "id" ? service.description : service.descriptionEn}
                </p>
              </div>

              {/* Read More link */}
              <div className="flex items-center gap-2 mt-8 font-mono text-xs text-brand-cyan group-hover:text-white transition-colors duration-200 cursor-pointer">
                <span>{lang === "id" ? "SELANJUTNYA" : "LEARN MORE"}</span>
                <Icon name="ArrowRight" size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
