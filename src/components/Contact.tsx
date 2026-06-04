import React, { useState } from "react";
import { companyName } from "../data";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface FacilityNode {
  id: string;
  nameId: string;
  nameEn: string;
  x: string;
  y: string;
  roleId: string;
  roleEn: string;
  status: "Active" | "Operational" | "Scanning";
  ping: string;
  coords: string;
  embedUrl: string;
}

const facilityNodes: FacilityNode[] = [
  {
    id: "hq",
    nameId: "Kantor Pusat - Jakarta",
    nameEn: "Jakarta Headquarters",
    x: "35%",
    y: "40%",
    roleId: "Pusat Operasional Senior & AI Systems",
    roleEn: "Executive Ops & Central Core AI",
    status: "Active",
    ping: "12ms",
    coords: "6.2238° S, 106.8124° E",
    embedUrl: "https://www.google.com/maps/embed?pb=!1s0x2e69f3e0dfb2f3af%3A0x6bbfcd80cca3d6bc!2sSudirman%20Central%20Business%20District!5m2!1sid!2sid"
  },
  {
    id: "lab",
    nameId: "Fasilitas R&D - Bandung",
    nameEn: "Bandung R&D Labs",
    x: "55%",
    y: "65%",
    roleId: "Lab Navigasi SLAM & Sensor Lidar",
    roleEn: "SLAM Localization & Lidar Systems",
    status: "Operational",
    ping: "18ms",
    coords: "6.9175° S, 107.6191° E",
    embedUrl: "https://www.google.com/maps/embed?pb=!1s0x2e68e6398252477f%3A0x146a16b4c1aa7ef2!2sBandung%20Institute%20of%20Technology!5m2!1sid!2sid"
  },
  {
    id: "factory",
    nameId: "Giga-Factory - Karawang",
    nameEn: "Karawang Assembly",
    x: "72%",
    y: "32%",
    roleId: "Pusat Perakitan Robot & Integrasi Alur Mekanik",
    roleEn: "Heavy Drone & Robot Mass Assembly",
    status: "Active",
    ping: "24ms",
    coords: "6.3025° S, 107.2909° E",
    embedUrl: "https://www.google.com/maps/embed?pb=!1s0x2e697793d98fb87d%3A0x2f8b5493edccaac1!2sKawasan%20Industri%20KIIC%20Karawang!5m2!1sid!2sid"
  }
];

interface ContactProps {
  lang: "id" | "en";
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mapMode, setMapMode] = useState<"holographic" | "satellite">("holographic");
  const [activeNodeId, setActiveNodeId] = useState<string>("hq");

  const activeNode = facilityNodes.find(n => n.id === activeNodeId) || facilityNodes[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-dark overflow-hidden px-6 lg:px-12">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <p className="font-mono text-xs text-brand-cyan uppercase tracking-widest text-glow-dim">
            {lang === "id" ? "09. HUBUNGI KAMI" : "09. GET IN TOUCH"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Contact <span className="text-brand-cyan">Us</span>
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full"></div>
          <p className="font-sans text-gray-400 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
            {lang === "id"
              ? "Diskusikan bagaimana solusi robotika kami dapat melipatgandakan indeks produktivitas operasional pabrik Anda."
              : "Let's schedule a demonstration to assess automation workflows tailored to your specific plant blueprint."}
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Card with Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl relative border border-brand-cyan/20">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                          {lang === "id" ? "Nama Lengkap *" : "Full Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-brand-dark/60 border border-brand-cyan/20 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                          placeholder="Budi Santoso"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                          {lang === "id" ? "Nama Perusahaan" : "Company Name"}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-brand-dark/60 border border-brand-cyan/20 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                          placeholder="PT Manufaktur Maju"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                          {lang === "id" ? "Alamat Email *" : "Email Address *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-brand-dark/60 border border-brand-cyan/20 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                          placeholder="budi@company.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                          {lang === "id" ? "Nomor Telepon" : "Phone Number"}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-brand-dark/60 border border-brand-cyan/20 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                          placeholder="+62 812-3456-7890"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                        {lang === "id" ? "Pesan / Kebutuhan Solusi *" : "Message *"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-brand-dark/60 border border-brand-cyan/20 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                        placeholder={
                          lang === "id"
                            ? "Jelaskan lini industri Anda dan kebutuhan sistem otomatisasi yang ingin diintegrasikan..."
                            : "Briefly map your current production workflow bottlenecks or system specs required..."
                        }
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-cyan text-brand-dark font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] disabled:opacity-50 transition-all duration-300"
                    >
                      {isSubmitting
                        ? lang === "id"
                          ? "MENGIRIM PESAN..."
                          : "DISPATCHING ENQUIRY..."
                        : lang === "id"
                        ? "KIRIM PESAN KEMITRAAN"
                        : "TRANSMIT SOLUTIONS ENQUIRY"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan text-brand-cyan flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(0,191,255,0.3)]">
                      <Icon name="CheckCircle" size={32} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {lang === "id" ? "Pesan Berhasil Terkirim!" : "Enquiry Successfully Dispatched!"}
                    </h3>
                    <p className="font-sans text-sm text-gray-300 max-w-md leading-relaxed">
                      {lang === "id"
                        ? "Terima kasih atas ketertarikan Anda terhadap RoboTech Innovations. Insinyur solusi senior kami akan menghubungi Anda dalam waktu maksimal 24 jam."
                        : "Our elite systems advisor has queued your credentials. Expect a strategic response in your inbox within 24 hours."}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 py-2 px-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs hover:bg-brand-cyan hover:text-brand-dark transition-colors"
                    >
                      {lang === "id" ? "Kirim Pesan Lain" : "Send Another Message"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Contact info & Google Maps integration */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Info Cards */}
            <div className="glass-card p-6.5 rounded-2xl flex flex-col gap-6">
              <h3 className="font-display font-medium text-lg text-white">
                {lang === "id" ? "Informasi Kontak Utama" : "HQ Global Coordinates"}
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-cyan/5 text-brand-cyan border border-brand-cyan/15 mt-0.5">
                  <Icon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="font-display text-xs text-gray-400 uppercase tracking-widest font-bold">Headquarters</h4>
                  <p className="font-sans text-sm text-white mt-1">
                    CyberTech Tower, Lt. 24, Jl. Jend. Sudirman No. 86, Jakarta, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-cyan/5 text-brand-cyan border border-brand-cyan/15 mt-0.5">
                  <Icon name="Mail" size={18} />
                </div>
                <div>
                  <h4 className="font-display text-xs text-gray-400 uppercase tracking-widest font-bold">Corporate Email</h4>
                  <p className="font-sans text-sm text-white mt-1 hover:text-brand-cyan cursor-pointer transition-colors">
                    solutions@robotech-innovations.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-cyan/5 text-brand-cyan border border-brand-cyan/15 mt-0.5">
                  <Icon name="Phone" size={18} />
                </div>
                <div>
                  <h4 className="font-display text-xs text-gray-400 uppercase tracking-widest font-bold">Operational Support</h4>
                  <p className="font-sans text-sm text-white mt-1">
                    +62 (21) 5088-7890 / WhatsApp: +62 811-900-8800
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Google Maps Embed / Styled Representation */}
            <div className="rounded-2xl overflow-hidden border border-brand-cyan/15 h-80 bg-brand-dark-card relative flex flex-col justify-between">
              
              {/* Tactical switch controls */}
              <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 bg-brand-dark/95 backdrop-blur-md border border-brand-cyan/20 px-2.5 py-1 rounded-md text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                <span className="text-gray-400">INTERFACE:</span>
                <span className="text-white font-bold">{mapMode.toUpperCase()}</span>
              </div>

              <div className="absolute top-3 right-3 z-30 flex bg-brand-dark/95 backdrop-blur-md border border-brand-cyan/20 p-0.5 rounded-lg text-[9px] font-mono">
                <button
                  type="button"
                  onClick={() => setMapMode("holographic")}
                  className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${mapMode === "holographic" ? "bg-brand-cyan text-brand-dark font-bold shadow-[0_0_8px_rgba(0,191,255,0.4)]" : "text-gray-400 hover:text-white"}`}
                >
                  HOLO-GRID
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode("satellite")}
                  className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${mapMode === "satellite" ? "bg-brand-cyan text-brand-dark font-bold shadow-[0_0_8px_rgba(0,191,255,0.4)]" : "text-gray-400 hover:text-white"}`}
                >
                  SATELLITE
                </button>
              </div>

              {mapMode === "holographic" ? (
                /* Interactive Tactical Hologram view of installations */
                <div className="relative w-full h-full bg-brand-dark overflow-hidden flex items-center justify-center select-none" id="holographic-tactical-map">
                  {/* Grid system in the background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" style={{ pointerEvents: 'none' }} />
                  
                  {/* Glowing Radar Rings */}
                  <div className="absolute w-40 h-40 border border-brand-cyan/5 rounded-full pointer-events-none animate-pulse" />
                  <div className="absolute w-64 h-64 border border-brand-cyan/5 rounded-full pointer-events-none" />
                  <div className="absolute w-[400px] h-[400px] border border-brand-cyan/5 rounded-full pointer-events-none" />
                  
                  {/* Spin radar line sweep layer using slow css rotation mapping */}
                  <div className="absolute w-72 h-72 pointer-events-none bg-[conic-gradient(from_0deg,transparent_60%,rgba(0,191,255,0.08)_100%)] rounded-full origin-center animate-[spin_10s_linear_infinite]" />

                  {/* Interactive Facility nodes across Java map coordinate proxy layout */}
                  {facilityNodes.map((node) => {
                    const isActive = activeNodeId === node.id;
                    return (
                      <button
                        type="button"
                        key={node.id}
                        onClick={() => setActiveNodeId(node.id)}
                        className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                        style={{ left: node.x, top: node.y }}
                      >
                        {/* Pulse circle */}
                        <span className={`absolute inline-flex h-8 w-8 rounded-full -left-2.5 -top-2.5 opacity-75 animate-ping duration-1000 ${isActive ? "bg-brand-cyan" : "bg-brand-cyan/25 group-hover:bg-brand-cyan/40"}`}></span>
                        {/* Inner glowing node point */}
                        <span className={`relative flex h-3.5 w-3.5 rounded-full items-center justify-center ${isActive ? "bg-white shadow-[0_0_15px_#00BFFF]" : "bg-brand-dark border-2 border-brand-cyan"} transition-all duration-300 group-hover:scale-125`}>
                          {isActive && <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />}
                        </span>
                        
                        {/* Floating Node Label */}
                        <span className={`absolute left-5 top-1/2 -translate-y-1/2 px-2 py-0.5 whitespace-nowrap bg-brand-dark/95 border ${isActive ? "border-brand-cyan text-brand-cyan text-[10px] font-bold shadow-[0_0_8px_rgba(0,191,255,0.25)]" : "border-brand-cyan/15 text-gray-400 text-[9px]"} rounded font-mono tracking-wider opacity-85 group-hover:opacity-100 transition-all`}>
                          {lang === "id" ? node.nameId.split(" - ")[1] : node.nameEn.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}

                  {/* Tactical readout watermark */}
                  <div className="absolute bottom-16 right-4 pointer-events-none select-none text-right font-mono text-[8px] text-brand-cyan/25 leading-normal">
                    <p>SYSTEM STATE: SECURE</p>
                    <p>TRANSMISSION: ACTIVE</p>
                    <p>GRID REF: JAK-RD-099X</p>
                  </div>
                </div>
              ) : (
                /* Standard Google satellite / street representation iframe */
                <iframe
                  title="Google Map Locator"
                  src={activeNode.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) brightness(95%) contrast(110%)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              )}

              {/* Float Glass Locator marker banner */}
              <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-brand-cyan/20 flex items-center justify-between z-30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                    <p className="font-mono text-[8px] text-brand-cyan uppercase tracking-wider font-semibold">
                      {lang === "id" ? "Koordinat Terpilih" : "Selected Coordinates"}
                    </p>
                    <span className="text-[8px] text-gray-500 font-mono hidden xs:inline">{activeNode.coords}</span>
                  </div>
                  <h4 className="font-display font-bold text-xs text-white mt-0.5">
                    {lang === "id" ? activeNode.nameId : activeNode.nameEn}
                  </h4>
                  <p className="font-sans text-[10px] text-gray-400">
                    {lang === "id" ? activeNode.roleId : activeNode.roleEn}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${activeNode.id === 'hq' ? 'Sudirman+Central+Business+District+Jakarta' : activeNode.id === 'lab' ? 'Bandung+Institute+of+Technology' : 'Kawasan+Industri+KIIC+Karawang'}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded bg-brand-cyan hover:bg-brand-cyan text-brand-dark hover:scale-105 transition-all text-xs font-bold"
                    title={lang === "id" ? "Buka di Google Maps" : "Open in Google Maps"}
                  >
                    <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
