import React, { useState } from "react";
import { techStackItems } from "../data";
import { TechItem } from "../types";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface TechStackProps {
  lang: "id" | "en";
}

export const TechStack: React.FC<TechStackProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<"ALL" | "AI" | "Hardware" | "Cloud & IoT">("ALL");

  const categories: ("ALL" | "AI" | "Hardware" | "Cloud & IoT")[] = ["ALL", "AI", "Hardware", "Cloud & IoT"];

  const filteredItems = activeCategory === "ALL" 
    ? techStackItems 
    : techStackItems.filter(item => item.category === activeCategory);

  return (
    <section id="tech" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12 border-t border-brand-cyan/10">
      {/* Background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "05. ARSITEKTUR TEKNOLOGI" : "05. TECH EMPOWERMENT"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Technology <span className="text-brand-cyan">Stack</span>
          </h2>
          <div className="h-1 w-16 bg-brand-cyan mt-4 mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === "id"
              ? "Kami mengintegrasikan algoritme komputasi canggih dan sensorik taktis di setiap lapis arsitektur rekayasa kami."
              : "We synthesize intelligent multi-layer computer modules and spatial-aware sensors across our entire device portfolio."}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-[0_0_15px_rgba(0,191,255,0.4)]"
                  : "bg-brand-dark-card text-gray-400 border-brand-cyan/10 hover:border-brand-cyan/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid with Layout Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={tech.name}
                className="glass-card p-6 rounded-2xl relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Glow behind card icon */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full filter blur-xl group-hover:bg-brand-cyan/15 transition-all duration-300" />
                
                <div>
                  {/* Category Pill Tag */}
                  <span className="font-mono text-[9px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
                    {tech.category}
                  </span>

                  <h3 className="font-display font-bold text-lg text-white mt-4 group-hover:text-brand-cyan transition-colors">
                    {tech.name}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Cyber style interactive icon in bottom corner */}
                <div className="mt-6 flex justify-end">
                  <div className="p-2 rounded-lg bg-brand-dark border border-brand-cyan/10 text-brand-cyan/70 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 transition-all duration-300">
                    <Icon name={tech.iconName} size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Aesthetic Animated Technical Footnote */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] text-brand-cyan/50 tracking-wider">
            SYSTEM CORES ARE CONTINUOUS ADAPTIVE UNDER ROS2 INTELLIGENCE MODULES
          </p>
        </div>

      </div>
    </section>
  );
};
