"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import TimeMachineOverlay from "./components/TimeMachineOverlay";

export default function Home() {
  const [isTimeMachineOpen, setIsTimeMachineOpen] = useState(false);

  return (
    <>
      <TimeMachineOverlay 
        isOpen={isTimeMachineOpen} 
        onClose={() => setIsTimeMachineOpen(false)} 
      />
      <Navbar onTimeMachineClick={() => setIsTimeMachineOpen(true)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
