import React from "react";
import { testimonials } from "../data";
import { Icon } from "./Icon";
import { motion } from "motion/react";

interface TestimonialsProps {
  lang: "id" | "en";
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "07. TESTIMONI KERJASAMA" : "07. ENTERPRISE TRUST"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Client <span className="text-brand-cyan">Testimonials</span>
          </h2>
          <div className="h-1 w-16 bg-brand-cyan mt-4 mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === "id"
              ? "Dengarkan langsung cerita sukses kolaborasi digital terpercaya dari para eksekutif dan pemimpin industri global."
              : "Read real stories of digital transformation directly from operations directors representing global key enterprises."}
          </p>
        </div>

        {/* Testimonials Deck */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testi) => (
            <motion.div
              key={testi.id}
              variants={cardVariants}
              className="glass-card hover:bg-brand-dark-card/90 transition-all duration-300 p-8 rounded-2xl border border-brand-cyan/15 flex flex-col justify-between group relative"
            >
              {/* Aesthetic Quotes Quote Indicator */}
              <div className="absolute top-6 right-8 text-brand-cyan/10 group-hover:text-brand-cyan/20 transition-colors pointer-events-none">
                <Icon name="MessageSquare" size={48} />
              </div>

              {/* Speech content */}
              <div>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed italic relative z-10">
                  "{lang === "id" ? testi.content : testi.contentEn}"
                </p>
              </div>

              {/* Bio Details footer */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-800">
                <img
                  src={testi.avatarUrl}
                  alt={testi.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-brand-cyan/30"
                />
                <div>
                  <h4 className="font-display font-medium text-sm sm:text-base text-white">
                    {testi.name}
                  </h4>
                  <p className="font-mono text-[11px] text-brand-cyan uppercase tracking-wider mt-0.5">
                    {testi.role}, <span className="text-gray-400 font-sans normal-case font-normal">{testi.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
