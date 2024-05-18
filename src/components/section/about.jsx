import CardDialoge from "../ui/card-dialoge";

export default function About({ image }) {
  return (
    <>
      <div className="flex justify-center gap-14 lg:px-8 pt-20 ">
        <CardDialoge Image={image} />
        <article>
          <h1 className="font-bold lg:text-4xl text-3xl mb-3 text-primary">
            About Me
          </h1>
          <p>
            Guntur Putra Hermawan is a student at a vocational school Taruna
            Budi Bangsa, in the field of visual communication design, and plunge
            in the world of programming in 2023 until now.
          </p>
        </article>
      </div>
    </>
  );
}
