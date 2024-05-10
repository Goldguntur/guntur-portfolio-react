import Navbar from "../components/navbar";
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
      <nav>
        <Navbar name={guntur.name} logoImg="/logo.jpg" alt={guntur.img.alt} />
      </nav>
      <main>
        <section></section>
      </main>
    </>
  );
}
