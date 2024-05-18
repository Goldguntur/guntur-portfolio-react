import CardDialoge2 from "../ui/card-dialoge2";
import { TypeAnimation } from "react-type-animation";

export default function home() {
  return (
    <section
      key="home"
      className=" mb-32 mx-auto lg:grid-flow-col-dense lg:h-[90vh]   lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center lg:place-content-center flex justify-center flex-col "
    >
      <article className="w-[45vw]">
        <h1 className="font-bold lg:text-4xl text-3xl mb-3">
          Introducing <span className="text-primary">myself</span>
        </h1>
        <h2 className="font-semibold lg:text-3xl text-2xl mb-1">
          <span className="text-primary">Hi there,</span> my name is Guntur
        </h2>
        <h3 className=" font-medium lg:text-2xl text-xl mb-2">
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
                "software developer",
                2000,
              ]}
              speed={10}
              className="text-inherit text-primary"
              repeat={Infinity}
            />
          </span>
        </h3>
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

      <section className="w-[45vw] ">
        <CardDialoge2 image="/Certificate/js-intermediate.png" />
      </section>
      <aside className="row-span-2">
        <img
          src="/images/guntur-parka.png"
          alt="guntur"
          width="300"
          className="  hover:-translate-y-3 translate-y-4 hover:-translate-x-3 -z-50 transition cursor-pointer lg:ml-12"
        />
      </aside>
    </section>
  );
}
