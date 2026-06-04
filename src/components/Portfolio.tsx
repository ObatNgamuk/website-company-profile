import React, { useState } from "react";
import { projects } from "../data";
import { Project } from "../types";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface PortfolioProps {
  lang: "id" | "en";
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "Logistics", "Manufacturing", "Healthcare", "Agriculture", "Industry 4.0", "Energy"];

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(proj => proj.category === filter);

  return (
    <section id="portfolio" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Background radial soft lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "06. PORTOLIO PROYEK" : "06. ENGINEERING PORTFOLIO"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Projects & <span className="text-brand-cyan">Portfolio</span>
          </h2>
          <div className="h-1 w-16 bg-brand-cyan mt-4 mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === "id"
              ? "Lihat bagaimana solusi inovatif kami diterapkan secara global untuk merevolusi jalannya proses bisnis industri."
              : "Witness how our high-precision systems are deployed across global facilities to eliminate operating friction."}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 border ${
                filter === cat
                  ? "bg-brand-cyan text-brand-dark border-brand-cyan font-bold"
                  : "bg-brand-dark-card text-gray-400 border-brand-cyan/10 hover:border-brand-cyan/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Smooth Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group border border-brand-cyan/15 flex flex-col justify-between"
              >
                {/* Visual Image container */}
                <div className="relative overflow-hidden aspect-[16/10] bg-brand-dark-card">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Aesthetic Layer Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                  
                  {/* Category Float Tag */}
                  <div className="absolute top-4 left-4 py-1 px-2.5 rounded bg-brand-dark/90 backdrop-blur-md border border-brand-cyan/20 text-[9px] font-mono text-brand-cyan tracking-widest uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed">
                      {lang === "id" ? project.description : project.descriptionEn}
                    </p>
                  </div>

                  {/* Technology badging tags */}
                  <div className="mt-6">
                    <p className="font-mono text-[9px] text-brand-cyan/70 tracking-widest uppercase mb-1.5">
                      DEPLOYED TECHS
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-gray-300 bg-brand-dark-card px-2 py-0.5 rounded border border-brand-cyan/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
