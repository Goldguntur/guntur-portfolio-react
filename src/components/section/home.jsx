"use client";

import React, { useRef, useEffect, useState } from "react";
import CardDialoge2 from "../ui/card-dialoge2";
import { TypeAnimation } from "react-type-animation";

import { gsap } from "gsap";
import CardDialoge from "../ui/card-dialoge";
export default function Home() {
  const title1 = useRef(null);
  const title2 = useRef(null);
  const tittle3 = useRef(null);
  const cardAni = useRef(null);
  const imageAni = useRef(null);
  const imageAniRes = useRef(null);

  let newText = `
  My name's guntur putra hermawan, i was born on 10 november 2007 in
  indonesia, i started coding in 2023 and when this portfolio was
  created I had already reached the javascript framework stage of
  roadmap.sh and that's why this portfolio website was created with React
  and Tailwind CSS`;

  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo(
      imageAniRes.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 }
    );

    tl.fromTo(
      title1.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 }
    );
    tl.fromTo(
      title2.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 }
    );

    tl.fromTo(
      tittle3.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4 }
    );

    tl.fromTo(
      ".word",
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.inOut",
      }
    );

    tl.fromTo(
      cardAni.current,
      {
        y: 15,
        x: -10,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );

    tl.fromTo(
      imageAni.current,
      {
        y: -15,
        x: 10,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );

    return () => {
      if (tl) tl.kill();
    };
  }, []);
  return (
    <section
      id="home"
      className="mx-auto mb-32 px-8 pt-9 lg:grid-flow-col-dense lg:h-[100vh]   lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center flex items-center flex-col w-full"
    >
      <article className="lg:w-[45vw]   mb-24 lg:mb-0 text-center lg:text-justify">
        <div
          className="relative flex justify-center lg:hidden "
          ref={imageAniRes}
        >
          <img
            src="/images/blob.svg"
            className="absolute w-[120px] md:w-[180px] -z-50"
            alt="svg"
          />
          <img
            src="/images/guntur-parka.png"
            alsst="guntur"
            className="w-[150px] md:w-[200px] -translate-y-16"
          />
        </div>
        <h1
          ref={title1}
          className="heading-hero font-bold lg:text-4xl text-3xl mb-3"
        >
          Introducing <span className="text-primary">myself</span>
        </h1>
        <h2 ref={title2} className="font-semibold lg:text-3xl text-2xl mb-1">
          <span className="text-primary">Hi there,</span> my name is Guntur
        </h2>
        <h3 className=" font-medium lg:text-2xl text-xl mb-2" ref={tittle3}>
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
                " software developer",
                2000,
              ]}
              speed={10}
              className="text-inherit text-primary"
              repeat={Infinity}
            />
          </span>
        </h3>

        <p
          className="text-xs md:text-sm text-center lg:text-justify relative"
          id="text"
        >
          {newText.split(" ").map((word, index) => (
            <span key={index} className="word inline-block ml-0 mr-1 relative">
              {word}
            </span>
          ))}
        </p>
      </article>
      <section className="lg:w-[45vw] lg:mx-0 mx-auto" ref={cardAni}>
        <CardDialoge2
          image="/Certificate/js-intermediate.png"
          className="-z-50 "
        />
      </section>

      <aside className="row-span-2 hidden lg:block" ref={imageAni}>
        <img
          src="/images/guntur-parka.png"
          alt="guntur"
          className="w-[80%] -z-50 transition -translate-y-20 ml-20 lg:block hidden"
        />
      </aside>
    </section>
  );
}
