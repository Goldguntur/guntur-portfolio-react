import CardDialoge from "../ui/card-dialoge";

export default function About({ image }) {
  return (
    <>
      <div className="flex justify-center gap-14 lg:px-8">
        <CardDialoge Image={image} />
        <article>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            officia recusandae laboriosam ab voluptatem ad eveniet nisi numquam
            cumque maxime, earum provident veniam laudantium, corporis quod a
            reiciendis sit accusantium.
          </p>
        </article>
      </div>
    </>
  );
}
