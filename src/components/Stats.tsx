import React, { useEffect, useState, useRef } from "react";
import { statistics } from "../data";
import { motion, useInView } from "motion/react";

interface StatsProps {
  lang: "id" | "en";
}

const TickingCounter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export const Stats: React.FC<StatsProps> = ({ lang }) => {
  return (
    <section className="relative py-20 bg-brand-dark overflow-hidden px-6 lg:px-12 border-y border-brand-cyan/10">
      <div className="absolute inset-0 bg-brand-cyan-dim opacity-[0.35]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-8 rounded-2xl bg-brand-dark-card/40 border border-brand-cyan/15 flex flex-col items-center justify-center text-center relative overflow-hidden group"
            >
              {/* Glow Accent behind counters */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Counter Display with Ticking Counter */}
              <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight flex items-center justify-center">
                <span className="text-glow animate-pulse">
                  <TickingCounter value={stat.value} />
                </span>
                <span className="text-brand-cyan ml-0.5 text-glow">{stat.suffix}</span>
              </div>

              {/* Labels */}
              <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest mt-4">
                {lang === "id" ? stat.label.toUpperCase() : stat.labelEn.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
