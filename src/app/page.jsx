"use client";

import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "./globals.css";

import Navbar from "@/components/ui/navbar";
import CardDialoge from "@/components/ui/card-dialoge";

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

export default function Home() {
  return (
    <>
      <nav className="mb-10">
        <Navbar name={guntur.name} logoImg="/logo.jpg" alt={guntur.img.alt} />
      </nav>
      <main></main>
    </>
  );
}
