import { Service, Product, WhyChooseUsItem, TechItem, Project, Testimonial, BlogPost } from "./types";

export const companyName = "RoboTech Innovations";

export const navigationLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Produk", href: "#products" },
  { label: "Teknologi", href: "#tech" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Artikel", href: "#blog" },
  { label: "Kontak", href: "#contact" }
];

export const services: Service[] = [
  {
    id: "industrial-robotics",
    title: "Industrial Robotics",
    titleEn: "Industrial Robotics & Cobots",
    description: "Revolusi lini produksi Anda dengan robot kolaboratif (cobots) cerdas dan lengan mekanis milimeter-presisi berkecepatan tinggi yang dirancang untuk beroperasi otonom 24/7 tanpa henti.",
    descriptionEn: "Revolutionize your assembly line with smart collaborative cobots and high-speed, millimeter-precise robotic arms engineered for seamless 24/7 autonomous operations.",
    iconName: "Cpu"
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    titleEn: "Industrial AI & Machine Learning",
    description: "Suntikkan kecerdasan otonom ke sistem Anda melalui deteksi anomali berbasis visi komputer, analisis prediktif big data, dan kalkulasi keputusan instan berkecepatan milidetik.",
    descriptionEn: "Infuse autonomous intelligence into your workflows with advanced computer vision, deep anomaly detection, and sub-millisecond predictive action engines.",
    iconName: "Brain"
  },
  {
    id: "automation-systems",
    title: "Automation Systems",
    titleEn: "Process Automation Systems",
    description: "Eliminasi galat manusia secara total dengan sinkronisasi sistem kendali terintegrasi tinggi berbasis PLC, SCADA, dan HMI pintar khusus rancangan industri manufaktur modern.",
    descriptionEn: "Completely eliminate human error margins via high-fidelity, custom-engineered control systems syncing PLC, SCADA, and next-gen intuitive touch interfaces.",
    iconName: "Settings"
  },
  {
    id: "iot-integration",
    title: "IoT Integration",
    titleEn: "Industrial Internet of Things (IIoT)",
    description: "Jembatani siber dan fisik secara mulus melalui arsitektur IIoT super aman yang memetakan telemetri mesin, status sensorik, dan performa pabrik dalam visual dashboard real-time.",
    descriptionEn: "Bridge the physical-digital divide via ultra-secure IIoT architectures streaming live sensor telemetry, machine status, and health metrics directly to your cloud dashboard.",
    iconName: "Layers"
  },
  {
    id: "smart-factory",
    title: "Smart Factory",
    titleEn: "Smart Factory Transformation",
    description: "Bangun replika digital interaktif (Digital Twin) dari seluruh lantai kerja Anda untuk simulasi real-time, perawatan aset proaktif, dan optimalisasi otomatisasi logistik pintar.",
    descriptionEn: "Supercharge production through real-time interactive digital twins, synchronizing adaptive machine ecosystems, predictive maintenance, and autonomous logistics.",
    iconName: "Zap"
  },
  {
    id: "robotics-consulting",
    title: "Robotics Consulting",
    titleEn: "Robotics & Automation Consulting",
    description: "Insinyur senior kami mendampingi perancangan blueprint robotika kustom Anda, mulai dari kalkulasi efisiensi investasi (ROI), kelayakan teknis, hingga pengawasan masa instalasi.",
    descriptionEn: "Partner with veteran robotics engineers to map your operational blueprint, perform rigorous feasibility tests, and maximize ROI through state-of-the-art systems.",
    iconName: "ShieldCheck"
  }
];

export const products: Product[] = [
  {
    id: "amr-rt1",
    name: "Autonomous Mobile Robot (AMR-RT1)",
    description: "Robot navigasi mandiri dengan sensor LiDAR dan modul AI visual untuk mengangkut muatan berat hingga 1 ton di area industri padat tanpa navigasi garis magnetik.",
    descriptionEn: "Self-navigating transport robot equipped with LiDAR systems and visual AI modules built to haul payloads up to 1 ton in complex layout without magnetic guidance.",
    specs: ["Daya angkut: 1000kg", "Navigasi: SLAM & LiDAR 3D", "Baterai: Otonom (auto-charge)", "Sistem Keamanan: Deteksi halangan 360°"],
    imageUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?auto=format&fit=crop&q=80&w=800",
    category: "Navigation"
  },
  {
    id: "warehouse-bot",
    name: "RoboLogistics Warehouse Bot",
    description: "Solusi otomatisasi pergudangan pintar dengan sistem penataan rak dinamis (ASRS) bertenaga tinggi untuk mempercepat waktu pemrosesan pesanan hingga 300%.",
    descriptionEn: "High-density automated storage and retrieval system (ASRS) designed to retrieve and organize inventory, accelerating warehouse order throughput by up to 300%.",
    specs: ["Kecepatan: 2.5 m/s", "Tinggi jangkauan: 6 meter", "Integrasi: WMS / ERP Cloud Link", "Akurasi penempatan: ±1mm"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    category: "Logistics"
  },
  {
    id: "ai-inspector-x1",
    name: "AI Vision Inspection Robot (X1)",
    description: "Sistem inspeksi kualitas bertenaga AI dengan kamera resolusi tinggi 8K untuk mendeteksi cacat mikro pada komponen elektronik atau otomotif dalam hitungan milidetik.",
    descriptionEn: "High-resolution AI-driven optical inspection robot featuring ultra-fast 8K macro camera arrays to detect sub-millimeter defects in manufacturing lines instantly.",
    specs: ["Kamera: 8K Stereo Depth Camera", "Kecerdasan: Deep Learning CNN", "Akurasi deteksi: 99.98%", "Kecepatan inspeksi: 120 item/menit"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    category: "Quality Control"
  },
  {
    id: "agribot-v2",
    name: "AgriBot Smart Cultivator V2",
    description: "Robot pertanian otonom untuk memantau kesehatan tanaman secara real-time, menyemprotkan pupuk presisi berbasis AI, dan membasmi gulma tanpa pestisida berbahaya.",
    descriptionEn: "Autonomous agricultural robot designed to analyze crop health, perform precision micro-fertilization, and extract weeds mechanically without eco-hazards.",
    specs: ["Efisiensi: Hemat air/pupuk 40%", "Sistem Tenaga: Solar-hybrid berlanjut", "Navigasi: RTK-GPS Akurasi Sentimeter", "Sensor: Multispektral AI"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    category: "Agriculture"
  },
  {
    id: "delivery-bot-nexus",
    name: "Nexus Otonom Delivery Bot",
    description: "Robot kargo pengiriman jarak pendek (last-mile delivery) tangguh yang dirancang khusus untuk membawa logistik di area perkantoran, rumah sakit, dan kampus modern.",
    descriptionEn: "All-weather last-mile delivery robot designed for payload cargo transport within urban centers, modern hospital blocks, and high-tech campuses.",
    specs: ["Kapasitas: 80 Liter (Kompartemen Kunci)", "Baterai: Bertahan hingga 12 jam", "Sinyal: 5G & V2X Connectivity", "Kamera: 360° Vision AI Hub"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    category: "Delivery"
  },
  {
    id: "smart-man-nexus",
    name: "CyberFactory Assembly Line Bot",
    description: "Sistem robotika manufaktur terintegrasi cerdas dengan lengan artikulasi 6 sumbu berdaya tahan tinggi, dirancang untuk pengelasan presisi dan perakitan mikro.",
    descriptionEn: "Ultra-precise 6-axis articulated robotic system engineered for high-durability tasks including automated smart micro-assembly and precision arc welding.",
    specs: ["Derajat Kebebasan: 6-Axis Articulated", "Payload Lengan: 50kg", "Jangkauan Radius: 1.8 meter", "Daya Tahan: IP67 Certified"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    category: "Manufacturing"
  }
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "innovation",
    title: "Inovasi Terdepan",
    titleEn: "Cutting-Edge Innovation",
    description: "Kami menerapkan riset kecerdasan buatan dan robotika termutakhir untuk melahirkan solusi yang melampaui standar industri saat ini.",
    descriptionEn: "We implement advanced research in Artificial Intelligence and Robotics to deliver solutions that redefine modern industry standards.",
    iconName: "Lightbulb"
  },
  {
    id: "reliability",
    title: "Keandalan Tinggi",
    titleEn: "Maximum Reliability",
    description: "Seluruh produk dan sistem kami melalui pengujian ketat berstandar militer untuk menjamin uptime operasional 99.9% di lingkungan paling ekstrem.",
    descriptionEn: "All products and installations undergo rigorous military-grade stress testing to guarantee 99.9% uptime in demanding environments.",
    iconName: "ShieldAlert"
  },
  {
    id: "expertise",
    title: "Tim Ekspertise Global",
    titleEn: "Global Class Expertise",
    description: "Tim ahli kami terdiri dari Ph.D dan insinyur perancang robotika dengan pengalaman kumulatif puluhan tahun di perusahaan teknologi terkemuka dunia.",
    descriptionEn: "Our engineering squad features Ph.D leaders and system integrators with decades of rich experience at top-tier worldwide technology firms.",
    iconName: "Award"
  },
  {
    id: "scalability",
    title: "Skalabilitas Sistem",
    titleEn: "Dynamic Scalability",
    description: "Arsitektur perangkat keras dan lunak kami dirancang secara modular agar mudah diperluas seiring pertumbuhan kebutuhan bisnis Anda.",
    descriptionEn: "Our systems and hardware footprints are engineered modularly, allowing seamless expansions matching your business scale requirements.",
    iconName: "TrendingUp"
  }
];

export const techStackItems: TechItem[] = [
  {
    name: "Computer Vision",
    category: "AI",
    iconName: "Eye",
    description: "Algoritma pemrosesan gambar real-time berbasis Deep CNN untuk navigasi robotik dan inspeksi cacat."
  },
  {
    name: "Machine Learning",
    category: "AI",
    iconName: "BrainCircuit",
    description: "Model prediktif canggih untuk menganalisis data operasional dan menetapkan jadwal perawatan mesin (predictive maintenance)."
  },
  {
    name: "Deep Learning",
    category: "AI",
    iconName: "Cpu",
    description: "Arsitektur jaringan saraf dalam untuk pengambilan keputusan otonom robot tingkat tinggi di medan dinamis."
  },
  {
    name: "Robotics Core (ROS 2)",
    category: "Hardware",
    iconName: "Component",
    description: "Mengadopsi kerangka kerja standar global ROS 2 untuk koordinasi perangkat keras, aktuator, dan sensor latency ultra-rendah."
  },
  {
    name: "IoT Edge Gateways",
    category: "Cloud & IoT",
    iconName: "Wifi",
    description: "Node sensorik industri dengan daya komputasi lokal untuk agregasi data real-time, enkripsi TLS 1.3, dan pengiriman MQTT."
  },
  {
    name: "Cloud SaaS Platform",
    category: "Cloud & IoT",
    iconName: "Cloud",
    description: "Dasbor analitik Cloud terintegrasi untuk mengawasi seluruh armada robotik (fleet management) dari satu layar monitor."
  },
  {
    name: "Digital Twin Systems",
    category: "Cloud & IoT",
    iconName: "GitBranch",
    description: "Simulasi 3D imersif dan real-time dari jalur pabrik fisik dengan akurasi simulasi spasial milimeter."
  },
  {
    name: "Cybersecurity Shield",
    category: "Hardware",
    iconName: "Lock",
    description: "Pertahanan siber berlapis enkripsi end-to-end terintegrasi chip pengaman khusus untuk melindungi robot dari sabotase luar."
  }
];

export const projects: Project[] = [
  {
    id: "smart-warehouse",
    title: "Smart Warehouse Automation",
    description: "Otomatisasi total kluster gudang logistik seluas 50.000m² di Jakarta dengan mengerahkan 80 armada AMR.",
    descriptionEn: "Total automation of a 50,000sqm logistic hub in Jakarta using a coordinated fleet of 80 AMRs running on custom visual SLAM.",
    category: "Logistics",
    technologies: ["AMR-RT1", "LiDAR SLAM", "Fleet Coordinator AI", "WMS Link"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ai-quality-inspection",
    title: "AI Quality Inspection Hub",
    description: "Integrasi sistem robotika visi kamera 8K pada rantai perakitan pabrik otomotif nasional untuk inspeksi bodi mobil.",
    descriptionEn: "Integration of 8K high-speed vision inspection robots on automated automotive lines, scanning welding defects.",
    category: "Manufacturing",
    technologies: ["AI Inspector X1", "Deep Learning CNN", "PLC Automation", "Jetson Edge Compute"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "autonomous-delivery",
    title: "Autonomous Campus Delivery",
    description: "Uji coba pengiriman logistik medis otonom menggunakan Nexus Delivery Bot terintegrasi di rumah sakit rujukan utama.",
    descriptionEn: "Deployment of Nexus Delivery Bots across health hospitality networks, carrying critical lab samples and medications 24/7.",
    category: "Healthcare",
    technologies: ["Nexus Delivery-Bot", "5G Connectivity", "RTK-GPS Navigation", "Active Crypt Lock"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "smart-farming",
    title: "Agri-Tech Smart Farming",
    description: "Otomatisasi pemeliharaan perkebunan kelapa sawit & holtikultura seluas 200 hektar dengan AgriBot V2.",
    descriptionEn: "Automated maintenance of 200-hectare organic agricultural lands utilizing AgriBot V2 cultivator fleets.",
    category: "Agriculture",
    technologies: ["AgriBot V2", "Spectral AI Camera", "Solar Power Array", "Autonomous Planter"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "manuf-auto",
    title: "Manufacturing Automation System",
    description: "Implementasi jalur produksi baja semi-artileri otonom dengan integrasi lengan robot artikulasi 6 poros.",
    descriptionEn: "Implementation of heavy-duty semi-autonomous steel production lines utilizing 6-axis cybernetic robotic arm arrays.",
    category: "Industry 4.0",
    technologies: ["CyberFactory Assembly", "SCADA Integration", "Predictive Vibration Core", "IIoT Gateways"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "predictive-maint",
    title: "Predictive Maintenance Platform",
    description: "Pemasangan ribuan sensor IIoT getaran akustik beresolusi tinggi di turbin pembangkit listrik utama untuk pencegahan kerusakan.",
    descriptionEn: "Deployment of acoustic high-frequency IIoT sensors across power station turbine units, linked to predictive maintenance models.",
    category: "Energy",
    technologies: ["IoT Edge Gateways", "Acoustic AI Diagnostics", "Azure Cloud Core", "Live Dashboard"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export const statistics = [
  { value: 100, suffix: "+", label: "Proyek Selesai", labelEn: "Projects Completed" },
  { value: 50, suffix: "+", label: "Klien Enterprise", labelEn: "Enterprise Clients" },
  { value: 20, suffix: "+", label: "Insinyur Robotika", labelEn: "Robotics Engineers" },
  { value: 10, suffix: "+", label: "Tahun Pengalaman", labelEn: "Years of Experience" }
];

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ir. Bambang Wijaya",
    role: "VP Operations",
    company: "PT Integra Manufacturing Tbk",
    content: "Integrasi robotika dari RoboTech Innovations melipatgandakan kecepatan jalur perakitan kami dan benar-benar menekan cacat inspeksi manual hingga hampir 0%. Layak mendapatkan predikat integrator terbaik di Asia Tenggara.",
    contentEn: "The robotic integration from RoboTech Innovations doubled our assembly output speed and lowered manual defect rates to nearly 0%. They truly stand as the gold standard integrator in Southeast Asia.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "testi-2",
    name: "Dr. Eliana Lestari",
    role: "Director of Logistics",
    company: "TransGlobal Logistics Corp",
    content: "Armada AMR-RT1 mengubah gudang kami yang tadinya padat dan berisik menjadi ekosistem logistik pintar yang senyap, efisien, dan bekerja tanpa henti 24 jam sehari dengan keamanan tingkat tinggi.",
    contentEn: "The AMR-RT1 fleet transformed our crowded, noisy warehouses into silent, highly efficient, and incredibly safe automated logistics zones working non-stop 24/7.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "testi-3",
    name: "Michael Chen",
    role: "Chief Innovation Officer",
    company: "BioAgri Sumatra Group",
    content: "Menggunakan AgriBot V2 memangkas kebutuhan bahan kimia perkebunan hingga 40% dan menghemat energi kerja lapangan secara mengagumkan. Dukungan purnajual tim insinyur mereka luar biasa sigap.",
    contentEn: "Deploying AgriBot V2 reduced chemical inputs by 40% and optimized ecological operational costs beautifully. Their engineering customer support is exceptionally responsive and professional.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Masa Depan Industri Manufaktur: Generasi Robot ROS 2 & Cloud Connectivity",
    summary: "Menelaah revolusi industri generasi keempat dengan perpaduan kontrol robotika latency rendah menggunakan ROS 2 dan monitoring armada terpusat di Cloud.",
    category: "Robotics",
    date: "1 Juni 2026",
    author: "Prof. Handoko Seno, Ph.D",
    readTime: "6 min baca",
    imageUrl: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "post-2",
    title: "Bagaimana Computer Vision Terintegrasi AI Mengubah Kecepatan Quality Control",
    summary: "Algoritma deteksi cacat sirkuit mikro elektronik bertenaga Deep CNN terbukti 10 kali lebih cepat di perakitan berkecepatan tinggi dibanding manusia.",
    category: "AI",
    date: "18 Mei 2026",
    author: "Pratiwi Utama, M.Sc",
    readTime: "5 min baca",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "post-3",
    title: "Memasuki Era Pabrik Pintar: Implementasi Digital Twin Untuk Efisiensi Energi",
    summary: "Simulasi 3D imersif dan pemodelan operasional termal melahirkan prediksi akurat beban kerja mesin, menghemat pengeluaran utilitas hingga 25% pertahun.",
    category: "Smart Manufacturing",
    date: "5 Mei 2026",
    author: "Ir. Gunawan Salim",
    readTime: "8 min baca",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];
