"use client";

import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "./globals.css";

import Navbar from "@/components/navbar";
import CardDialoge from "@/components/card-dialoge";

const guntur = {
  name: "Guntur",
  age: 17,
  address: "goldguntur1623@gmail.com",
  number: "088294240750",
  img: {
    src: "/images/guntur.png",
    src2: "/images/guntur-parka.png",
    alt: "guntur",
  },
};

export default function Home() {
  return (
    <>
      <nav className="mb-10">
        <Navbar name={guntur.name} logoImg="/logo.jpg" alt={guntur.img.alt} />
      </nav>
      <main>
        <section
          key="home"
          className="w-full h-full gap-4 flex items-center justify-center md:flex-row p-3"
        >
          <article className="w-1/2">
            <h1 className="font-semibold lg:text-3xl text-2xl mb-1">
              <span className="text-primary">Hi there,</span> my name is Guntur
            </h1>
            <h2 className=" font-medium lg:text-2xl text-xl mb-2">
              I am
              <span className="text-primary">
                <TypeAnimation
                  sequence={[
                    " programmer",
                    2000,
                    " web developer",
                    2000,
                    " front end developer",
                    2000,
                  ]}
                  speed={10}
                  className="text-inherit text-primary"
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p className="text-xs md:text-sm">
              My name's guntur putra hermawan, i was born on 10 november 2007 in
              indonesia, i started coding in 2023 and when this portfolio was
              created I had already reached the javascript framework stage of
              <a href="http://roadmap.sh" className=" underline">
                {" "}
                roadmap.sh
              </a>{" "}
              and that's why this portfolio website was created with React
            </p>
          </article>
          <aside className="w-1/2 h-52">
            <CardDialoge />
          </aside>
        </section>
      </main>
    </>
  );
}
