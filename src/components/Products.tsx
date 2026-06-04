import React, { useState } from "react";
import { products } from "../data";
import { Product } from "../types";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface ProductsProps {
  lang: "id" | "en";
}

export const Products: React.FC<ProductsProps> = ({ lang }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="products" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Background radial lights */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "03. KATALOG PRODUK FUTURISTIK" : "03. PREMIUM PRODUCTS LINI"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Featured <span className="text-brand-cyan">Products</span>
          </h2>
          <div className="h-1 w-16 bg-brand-cyan mt-4 mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === "id"
              ? "Telusuri katalog robotika inovatif kami dengan akurasi pengerjaan ekstrim dan integrasi kecerdasan buatan tingkat lanjut."
              : "Discover our premium line of autonomous robotic agents featuring high structural endurance and advanced diagnostic models."}
          </p>
        </div>

        {/* Catalog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="glass-card hover:bg-brand-dark-card/90 transition-all duration-300 rounded-2xl overflow-hidden group border border-brand-cyan/15 flex flex-col h-full"
            >
              {/* Product Image Panel */}
              <div className="relative overflow-hidden aspect-[4/3] bg-brand-dark-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                
                {/* Visual Accent Category Label */}
                <div className="absolute top-4 left-4 py-1 px-3 bg-brand-dark/80 backdrop-blur-md rounded border border-brand-cyan/20 text-brand-cyan font-mono text-[10px] tracking-widest uppercase">
                  {product.category}
                </div>

                {/* Cover Gradient overlay subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent op-80"></div>
              </div>

              {/* Product Content Pane */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display font-medium text-lg text-white group-hover:text-brand-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {lang === "id" ? product.description : product.descriptionEn}
                  </p>
                </div>

                {/* Specs Overview bullets */}
                <div className="mt-5 pt-4 border-t border-gray-800 flex flex-wrap gap-2">
                  {product.specs.slice(0, 2).map((spec, i) => (
                    <span key={i} className="text-[10px] font-mono text-gray-400 bg-brand-dark-card/50 px-2 py-1 rounded border border-brand-cyan/10">
                      {spec.split(":")[0]}
                    </span>
                  ))}
                </div>

                {/* Detail CTA Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium hover:bg-brand-cyan hover:text-brand-dark hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300 uppercase tracking-widest"
                >
                  {lang === "id" ? "Lihat Detail Produk" : "View Product Details"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Modal overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-3xl w-full rounded-2xl overflow-hidden relative z-10 border border-brand-cyan/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-dark/80 text-gray-400 hover:text-white border border-brand-cyan/20 transition-colors"
                id="close-modal-btn"
              >
                <Icon name="X" size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left col: Image */}
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark/40 via-transparent to-transparent"></div>
                </div>

                {/* Right col: specs & content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-brand-cyan tracking-widest block mb-1">
                      {selectedProduct.category.toUpperCase()} SPECIFICATION
                    </span>
                    <h3 className="font-display font-medium text-2xl text-white">
                      {selectedProduct.name}
                    </h3>

                    <p className="font-sans text-sm text-gray-300 mt-4 leading-relaxed">
                      {lang === "id" ? selectedProduct.description : selectedProduct.descriptionEn}
                    </p>

                    {/* Specifications List */}
                    <div className="mt-6">
                      <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-wider mb-2">
                        {lang === "id" ? "Spesifikasi Teknis:" : "Technical Specs:"}
                      </h4>
                      <ul className="space-y-2 mt-1.5">
                        {selectedProduct.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                            <Icon name="CheckCircle" className="text-brand-cyan shrink-0 mt-0.5" size={12} />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Button */}
                  <div className="mt-8 flex gap-3">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-grow text-center py-3.5 px-4 rounded-xl bg-brand-cyan text-brand-dark text-xs font-mono font-medium hover:bg-white hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300 uppercase tracking-widest"
                    >
                      {lang === "id" ? "Pesan / Minta Penawaran" : "Request Demonstration"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Click outside backdrop close handler */}
            <div className="absolute inset-0 -z-1" onClick={() => setSelectedProduct(null)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
