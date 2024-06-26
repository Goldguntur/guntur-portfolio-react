import "./globals.css";
import Home from "@/components/section/home";
import Navbar from "@/components/section/navbar";
import About from "@/components/section/about";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";
import Footer from "@/components/section/footer";

const guntur = {
  name: "Guntur",
  age: 17,
  address: "goldguntur1623@gmail.com",
  number: "+62 882-9424-0750",
  github: "https://github.com/Goldguntur",
  instagram: "https://www.instagram.com/gunture17/",
  linkedin: "https://www.linkedin.com/in/guntur-putra-135923298/",
  x: "https://x.com/Gunture17",
  img: {
    src: "/images/guntur.png",
    src2: "/images/guntur-parka.png",
    alt: "guntur",
    CV: "/images/cv-image.png",
  },
};

const App = () => {
  return (
    <>
      <Navbar name={guntur.name} logoImg="/logo.jpg" alt={guntur.img.alt} />
      <main>
        <div className="mb-44 w-full">
          <Home key="home" />
        </div>
        <div className="mb-44 w-full">
          <About image={guntur.img.CV} key="about" />
        </div>
        <div className="mb-44 w-full">
          <Projects key="projects" />
        </div>
        <Contact
          key="contact"
          number={guntur.number}
          email={guntur.address}
          github={guntur.github}
          instagram={guntur.instagram}
          linkedin={guntur.linkedin}
          x={guntur.x}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
