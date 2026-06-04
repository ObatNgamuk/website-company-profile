import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TechStack } from "./components/TechStack";
import { Portfolio } from "./components/Portfolio";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<"id" | "en">("id");

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Products lang={lang} />
      <WhyChooseUs lang={lang} />
      <TechStack lang={lang} />
      <Portfolio lang={lang} />
      <Stats lang={lang} />
      <Testimonials lang={lang} />
      <Blog lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

