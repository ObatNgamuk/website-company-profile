import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Icon } from "./Icon";

interface HeroProps {
  lang: "id" | "en";
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simple particle system simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    // Create particles
    const particleCount = Math.min(60, Math.floor(width / 20));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: "rgba(0, 191, 255, " + (Math.random() * 0.4 + 0.1) + ")"
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = "rgba(0, 191, 255, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden pt-24 pb-12"
    >
      {/* Background Gradient Map & Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,191,255,0.12),transparent_50%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,191,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.4)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Canvas for Particle Effects */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Headline */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-xs font-semibold tracking-wider uppercase"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            {lang === "id" ? "Pemimpin Otomatisasi Industri 4.0" : "Leader in Industry 4.0 Automation"}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Transforming Industry Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white text-glow">
              Intelligent Robotics
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            {lang === "id"
              ? "Kami merancang dan memproduksi solusi robotika canggih yang terintegrasi dengan Kecerdasan Buatan (AI), Otomatisasi Presisi, dan Sistem IoT Pintar."
              : "We build advanced robotic solutions powered by Artificial Intelligence, Automation, and Smart Systems."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#products"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-cyan text-brand-dark font-mono text-sm font-bold tracking-wider hover:bg-white hover:shadow-[0_0_25px_rgba(0,191,255,0.5)] transition-all duration-300"
            >
              {lang === "id" ? "JELAJAHI PRODUK" : "EXPLORE SOLUTIONS"}
              <Icon name="ArrowRight" size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-transparent border border-brand-cyan/40 text-white font-mono text-sm font-bold tracking-wider hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-300"
            >
              {lang === "id" ? "HUBUNGI KAMI" : "CONTACT US"}
            </a>
          </motion.div>

          {/* Core Specs Small Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800 w-full mt-6"
          >
            <div>
              <p className="font-mono text-xs text-brand-cyan text-glow-dim">AI READY</p>
              <p className="font-sans text-sm text-gray-400 mt-1">Autonomous Systems</p>
            </div>
            <div>
              <p className="font-mono text-xs text-brand-cyan text-glow-dim">SAFETY GRADE</p>
              <p className="font-sans text-sm text-gray-400 mt-1">SIL 3 Certified</p>
            </div>
            <div>
              <p className="font-mono text-xs text-brand-cyan text-glow-dim">IIOT SYNC</p>
              <p className="font-sans text-sm text-gray-400 mt-1">99.9% Cloud Uptime</p>
            </div>
          </motion.div>
        </div>

        {/* Right 3D-Like Vector Robotic Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center"
        >
          {/* Animated Glow Rings Behind Vector */}
          <div className="absolute w-80 h-80 rounded-full border border-brand-cyan/20 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-brand-cyan/10 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="absolute w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl" />

          {/* Premium Tech Drawing Robot Arm SVG */}
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full max-w-[420px] text-brand-cyan relative z-10"
            id="glowing-robot-svg"
          >
            {/* Robot Base Mount */}
            <g>
              <rect x="180" y="410" width="140" height="40" rx="8" fill="#112240" stroke="#00BFFF" strokeWidth="2.5" />
              <line x1="150" x2="350" y1="450" y2="450" stroke="#00BFFF" strokeWidth="4" />
              <circle cx="250" cy="410" r="15" fill="#0A192F" stroke="#00BFFF" strokeWidth="2" />
            </g>

            {/* Arm Joint 1 - Base Pivot */}
            <g className="origin-[250px_410px] animate-[spin_12s_ease-in-out_infinite_alternate]">
              {/* Lower Segment */}
              <line x1="250" y1="410" x2="190" y2="280" stroke="#00BFFF" strokeWidth="12" strokeLinecap="round" />
              <line x1="250" y1="410" x2="190" y2="280" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              
              {/* Hydralic piston */}
              <line x1="275" y1="410" x2="220" y2="310" stroke="#112240" strokeWidth="4" />
              <line x1="275" y1="410" x2="220" y2="310" stroke="#00BFFF" strokeWidth="1" />

              {/* Joint 2 - Elbow */}
              <circle cx="190" cy="280" r="18" fill="#112240" stroke="#00BFFF" strokeWidth="3" />
              <circle cx="190" cy="280" r="6" fill="#00BFFF" />

              <g className="origin-[190px_280px] animate-[spin_8s_ease-in-out_infinite_alternate]">
                {/* Upper Segment */}
                <line x1="190" y1="280" x2="320" y2="180" stroke="#00BFFF" strokeWidth="8" strokeLinecap="round" />
                <line x1="190" y1="280" x2="320" y2="180" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

                {/* Sub-structures/wiring */}
                <path d="M 190 280 Q 210 240 320 180" fill="none" stroke="#00BFFF" strokeWidth="1" strokeDasharray="3,3" />

                {/* Joint 3 - Wrist */}
                <circle cx="320" cy="180" r="12" fill="#112240" stroke="#00BFFF" strokeWidth="2.5" />
                
                <g className="origin-[320px_180px] animate-[spin_5s_ease-in-out_infinite_alternate]">
                  {/* Effector / Hand tools */}
                  <line x1="320" y1="180" x2="360" y2="140" stroke="#00BFFF" strokeWidth="5" />
                  
                  {/* Robotic Clamp */}
                  <path d="M 360 140 Q 380 120 375 105 M 360 140 Q 380 155 385 170" fill="none" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Laser Spark Focus Indicator */}
                  <g className="animate-pulse">
                    <circle cx="372" cy="138" r="4" fill="#00BFFF" className="shadow-[0_0_15px_#00BFFF]" />
                    <line x1="372" x2="410" y1="138" y2="105" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2,2" />
                    
                    {/* Laser Target Box */}
                    <rect x="410" y="85" width="80" height="40" rx="4" fill="rgba(17,34,64,0.8)" stroke="#00BFFF" strokeWidth="1" />
                    <text x="418" y="102" fill="#00BFFF" fontSize="8" fontFamily="var(--font-mono)">LASER SYNC</text>
                    <text x="418" y="116" fill="#FFFFFF" fontSize="7" fontFamily="var(--font-sans)">TARGET ACQUIRED</text>
                  </g>
                </g>
              </g>
            </g>

            {/* Futuristic Tech Data Callouts */}
            <g transform="translate(40, 60)" className="animate-pulse">
              <rect x="0" y="0" width="105" height="40" rx="6" fill="rgba(17,34,64,0.7)" stroke="#00BFFF" strokeWidth="1" />
              <text x="8" y="15" fill="#00BFFF" fontSize="8" fontFamily="var(--font-mono)" fontWeight="bold">ARM-POSE: LIVE</text>
              <text x="8" y="28" fill="#E5E7EB" fontSize="7" fontFamily="var(--font-sans)">X: 254.3mm Y: -12.4mm</text>
            </g>

            <g transform="translate(60, 320)">
              <rect x="0" y="0" width="100" height="30" rx="5" fill="rgba(17,34,64,0.7)" stroke="#00BFFF" strokeWidth="0.5" />
              <text x="8" y="12" fill="#00BFFF" fontSize="6.5" fontFamily="var(--font-mono)" fontWeight="bold">HYDRAULIC.SYS</text>
              <text x="8" y="22" fill="#10B981" fontSize="6.5" fontFamily="var(--font-sans)">● NORMAL / 82 BAR</text>
            </g>
          </svg>

          {/* Circle Data streams spinning */}
          <div className="absolute top-4 right-10 flex flex-col items-end">
            <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase">system ready</span>
            <span className="font-mono text-[11px] text-white">SYS_CTRL_ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
