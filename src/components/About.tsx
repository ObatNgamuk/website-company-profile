import React from "react";
import { companyName } from "../data";
import { Icon } from "./Icon";
import { motion } from "motion/react";

interface AboutProps {
  lang: "id" | "en";
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const coreValues = [
    {
      titleId: "Integritas & Keamanan",
      titleEn: "Integrity & Security",
      descId: "Kami menempatkan keselamatan operasional dan integritas data klien di atas segalanya.",
      descEn: "We place operational safety and client data integrity above all else.",
      icon: "ShieldCheck"
    },
    {
      titleId: "Presisi & Kualitas",
      titleEn: "Precision & Quality",
      descId: "Akurasi hingga sub-milimeter adalah standar mutlak di setiap rancangan mekanik kami.",
      descEn: "Sub-millimeter accuracy is an absolute benchmark in every mechanical footprint we construct.",
      icon: "Settings"
    },
    {
      titleId: "Kolaborasi Global",
      titleEn: "Global Collaboration",
      descId: "Bekerja sama erat dengan pemimpin industri dunia untuk mempercepat era digitalisasi pabrik.",
      descEn: "Working seamlessly with worldwide industry pioneers to expedite factory digitalization.",
      icon: "Layers"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Background Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "01. TENTANG PERUSAHAAN" : "01. COMPANY OVERVIEW"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            About <span className="text-brand-cyan">{companyName}</span>
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full"></div>
        </div>

        {/* Two Column Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Brief & Vision/Mission */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full filter blur-xl transform translate-x-10 -translate-y-10" />
              <p className="font-sans text-gray-200 text-lg leading-relaxed">
                {lang === "id"
                  ? "RoboTech Innovations adalah perusahaan teknologi visioner yang berfokus pada pengembangan solusi robotika canggih, kecerdasan buatan (AI), IoT, dan teknologi otomasi industri kelas dunia. Kami berdedikasi tinggi untuk mendorong transformasi digital perusahaan manufaktur menuju efisiensi, produktivitas, serta skalabilitas tanpa batas di era Industri 4.0."
                  : "RoboTech Innovations is a pioneering tech enterprise dedicated to designing high-performance robotics, Artificial Intelligence integrations, IoT solutions, and world-class industrial automation systems. We empower industries worldwide to transform manual bottlenecks into scalable, ultra-efficient digital assets ready for Industry 4.0."}
              </p>
            </motion.div>

            {/* Vision & Mission Bento Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vision Card */}
              <motion.div variants={itemVariants} className="glass-card p-6.5 rounded-xl border border-brand-cyan/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    <Icon name="Eye" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {lang === "id" ? "Visi Kami" : "Our Vision"}
                  </h3>
                </div>
                <p className="font-sans text-sm text-gray-300 leading-relaxed">
                  {lang === "id"
                    ? "Menjadi katalisator transformasi otomatisasi global yang mengintegrasikan robot pintar dan kecerdasan buatan demi menciptakan masa depan industri yang berkelanjutan, aman, dan tanpa batas."
                    : "To be the ultimate global catalyst for industrial automation, integrating intelligent robotics and advanced AI to shape a highly efficient, sustainable, and safer manufacturing horizon."}
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div variants={itemVariants} className="glass-card p-6.5 rounded-xl border border-brand-cyan/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    <Icon name="Zap" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {lang === "id" ? "Misi Kami" : "Our Mission"}
                  </h3>
                </div>
                <ul className="font-sans text-sm text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  {lang === "id" ? (
                    <>
                      <li>Menyediakan rekayasa robotika militer dengan fungsionalitas presisi sub-milimeter.</li>
                      <li>Mengembangkan AI adaptif demi pengambilan keputusan robotik yang mandiri.</li>
                      <li>Memberikan layanan purnajual prima demi keberlanjutan operasional klien 24/7.</li>
                    </>
                  ) : (
                    <>
                      <li>Provide robust robotics engineering featuring sub-millimeter precision.</li>
                      <li>Develop adaptive AI workflows for real-time edge decision-making.</li>
                      <li>Deliver exceptional technical support ensuring client operations thrive 24/7.</li>
                    </>
                  )}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Values & Fast Spec Illustration */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              {lang === "id" ? "Nilai Inti Kami" : "Our Core Values"}
            </h3>

            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl bg-brand-dark-card/50 border border-brand-cyan/10 hover:border-brand-cyan/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-brand-cyan/5 text-brand-cyan border border-brand-cyan/10 mt-1">
                  <Icon name={value.icon} size={22} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    {lang === "id" ? value.titleId : value.titleEn}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    {lang === "id" ? value.descId : value.descEn}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Micro schematic panel details (Aesthetic detail matching industrial design focus) */}
            <motion.div
              variants={itemVariants}
              className="mt-4 p-5 rounded-lg border border-dashed border-brand-cyan/20 bg-brand-cyan-dim font-mono text-xs text-brand-cyan/80 leading-relaxed flex flex-col gap-1"
            >
              <div className="flex justify-between border-b border-brand-cyan/10 pb-1 mb-1">
                <span>MODEL VER</span>
                <span>RT-INNOVATIONS-2026</span>
              </div>
              <div className="flex justify-between">
                <span>HEADQUARTERS</span>
                <span className="text-white">JAKARTA, INDONESIA</span>
              </div>
              <div className="flex justify-between">
                <span>R&D CLUSTER</span>
                <span className="text-white">ROBOTICS LABS IX CO</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
