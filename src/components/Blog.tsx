import React, { useState } from "react";
import { blogPosts } from "../data";
import { BlogPost } from "../types";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface BlogProps {
  lang: "id" | "en";
}

export const Blog: React.FC<BlogProps> = ({ lang }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Prevent background scrolling when article is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="blog" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12 border-t border-brand-cyan/10">
      {/* Background gradients */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "08. ARTIKEL & AKADEMI" : "08. NEWS & INSIGHTS"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Latest News & <span className="text-brand-cyan">Insights</span>
          </h2>
          <div className="h-1 w-16 bg-brand-cyan mt-4 mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === "id"
              ? "Ikuti ulasan terbaru kami seputar optimasi manufaktur dan arah perkembangan sensorik robotika global."
              : "Read our comprehensive intelligence briefings covering robotic vision advancements and smart automation trends."}
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              onClick={() => setSelectedPost(post)}
              className="glass-card hover:bg-brand-dark-card/90 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer group border border-brand-cyan/15 flex flex-col justify-between h-full"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark-card">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-brand-cyan text-brand-dark font-bold px-2.5 py-0.5 rounded shadow">
                    {post.category}
                  </div>
                </div>

                {/* Content Header */}
                <div className="p-6">
                  {/* Meta items */}
                  <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={12} className="text-brand-cyan" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} className="text-brand-cyan" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 border-t border-gray-800/50 mt-6 flex justify-between items-center bg-brand-dark-card/25">
                <span className="font-sans text-xs text-gray-400 italic">By {post.author}</span>
                <span className="font-mono text-xs text-brand-cyan group-hover:text-white transition-colors flex items-center gap-1">
                  {lang === "id" ? "BACA" : "READ"}
                  <Icon name="ArrowRight" size={10} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Dynamic Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden relative z-10 border border-brand-cyan/40 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-dark/80 text-gray-400 hover:text-white border border-brand-cyan/20"
                id="close-article-btn"
              >
                <Icon name="X" size={18} />
              </button>

              <div className="overflow-y-auto w-full h-full scrollbar-thin scrollbar-thumb-brand-cyan/20">
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
                </div>

                <div className="p-8">
                  <span className="py-1 px-3 rounded bg-brand-cyan/15 text-brand-cyan font-mono text-[10px] tracking-widest uppercase border border-brand-cyan/20">
                    {selectedPost.category}
                  </span>

                  <h3 className="font-display font-bold text-2xl text-white mt-4">
                    {selectedPost.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mt-4 border-y border-gray-800 py-3">
                    <span>Author: <strong className="text-white">{selectedPost.author}</strong></span>
                    <span>|</span>
                    <span>{selectedPost.date}</span>
                  </div>

                  {/* Substantive Article Body Copy mock */}
                  <p className="font-sans text-sm sm:text-base text-gray-300 mt-6 leading-relaxed">
                    {selectedPost.summary} Untuk menanggapi iklim disrupsi industri yang bergerak cepat, RoboTech Innovations terus menyempurnakan performa integrasi mikrokontroler kami agar siap menyambut gelombang otomatisasi masa depan. Kami percaya bahwa sinergi hulu-hilir antara komputasi tepi (edge computing) ber-latency rendah dan model penalaran otonom di pusat data cloud adalah kunci efisiensi pabrik pintar masa kini.
                  </p>

                  <p className="font-sans text-sm text-gray-400 mt-4 leading-relaxed">
                    Uji coba internal kami menunjukkan bahwa standardisasi arsitektur ROS 2 di atas chip bersertifikasi keamanan tingkat militer terbukti melindungi ekosistem pabrik dari serangan sabotase siber, sekaligus menjaga uptime koneksi di atas angka 99.98%.
                  </p>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="py-2.5 px-6 rounded-lg bg-brand-cyan text-brand-dark font-mono text-xs font-bold hover:bg-white transition-colors animate-pulse"
                    >
                      {lang === "id" ? "Selesai Membaca" : "Close Reader"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute inset-0 -z-1" onClick={() => setSelectedPost(null)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
