"use client";

import CardDialoge3 from "../ui/card-dialoge3";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const projects = {
  calculator: {
    Title: "Simple Calculator",
    link: "https://goldguntur.github.io/simpleCalculatorJs/",
    image: "/images/calculator.png",
    description: "Simple calculator built by JS",
    readMore:
      "This web was built by Javascript and Html for having some fun with js",
  },
  bookshelf: {
    Title: "Bookshelf",
    link: "https://goldguntur.github.io/bookself/",
    image: "/images/bookself.png",
    description: "Bookshelf built with React",
    readMore:
      "This web was built for study in dicoding.com for getting certificates with Javascript",
  },
  newyear: {
    Title: "New Year",
    link: "https://goldguntur.github.io/newYears/",
    image: "/images/newyear.png",
    description: "Happy New Year 2024 for my self",
    readMore:
      "This website is designed to welcome the new year 2024 with JavaScript",
  },
  album: {
    Title: "Album Class",
    link: "https://dkvsquad.000webhostapp.com/loading.html",
    image: "/images/album-class.png",
    description: "Album Class Design communication visual",
    readMore:
      "This website was created for the Visual Communication Design Vocational School class and the music was chosen based on their preferences",
  },
};

export default function Projects() {
  const headerProjectsAni = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerProjectsAni.current,
      },
    });

    tl.fromTo(
      headerProjectsAni.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }
    );

    tl.fromTo(
      ".card-ani-3",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.5,
        },
        duration: 0.8,
      }
    );
  }, []);
  return (
    <>
      <section id="projects">
        <div className="pt-20 px-8 text-center">
          <h1
            ref={headerProjectsAni}
            className="font-bold lg:text-4xl text-3xl mb-14 text-primary"
          >
            Projects
          </h1>
          <div className="card-section  flex gap-5 flex-wrap justify-center">
            <div className=" size-fit card-ani-3">
              <CardDialoge3
                Image={projects.bookshelf.image}
                Title={projects.bookshelf.Title}
                link={projects.bookshelf.link}
                description={projects.bookshelf.description}
                readMore={projects.bookshelf.readMore}
              />
            </div>

            <div className=" size-fit card-ani-3">
              <CardDialoge3
                Image={projects.newyear.image}
                Title={projects.newyear.Title}
                link={projects.newyear.link}
                description={projects.newyear.description}
                readMore={projects.newyear.readMore}
              />
            </div>

            <div className=" size-fit card-ani-3">
              <CardDialoge3
                Image={projects.album.image}
                Title={projects.album.Title}
                link={projects.album.link}
                description={projects.album.description}
                readMore={projects.album.readMore}
              />
            </div>

            <div className=" size-fit card-ani-3">
              <CardDialoge3
                Image={projects.calculator.image}
                Title={projects.calculator.Title}
                link={projects.calculator.link}
                description={projects.calculator.description}
                readMore={projects.calculator.readMore}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
