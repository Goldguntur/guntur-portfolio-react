"use client";

import { useRef } from "react";
import "./globals.css";
import Home from "@/components/section/home";
import Navbar from "@/components/ui/navbar";
import About from "@/components/section/about";

const guntur = {
  name: "Guntur",
  age: 17,
  address: "goldguntur1623@gmail.com",
  number: "088294240750",
  img: {
    src: "/images/guntur.png",
    src2: "/images/guntur-parka.png",
    alt: "guntur",
    CV: "/images/cv-image.png",
  },
};

export default function App() {
  return (
    <>
      <nav className="mb-10">
        <Navbar
          name={guntur.name}
          logoImg="/logo.jpg"
          className="z-[9999999]"
          alt={guntur.img.alt}
        />
      </nav>
      <main>
        <Home key="home" />
        <About image={guntur.img.CV} key="about" />
      </main>
    </>
  );
}
