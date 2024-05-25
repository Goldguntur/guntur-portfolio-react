export default function Navbar({ name, logoImg, alt }) {
  return (
    <nav className="navbar sticky lg:fixed top-0 block z-50 h-max w-full max-w-full">
      <div className=" flex bg-black  justify-between  items-center  p-1 lg:p-3">
        <h1 className=" text-primary text-xl ">
          {name}e<span className=" text-white">17</span>
        </h1>
        <ul className="flex gap-4 justify-center items-center ">
          <li>
            <a href="#home" className="text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-primary">
              Contact
            </a>
          </li>
        </ul>
        {/* icon img if click to dry text*/}
        <div className="relative">
          <img src={logoImg} alt={alt} className="rounded-full w-9 peer" />

          <p className="p-2 text-xs opacity-0 -translate-y-3 peer peer-hover:-translate-y-0 peer-hover:opacity-100 absolute transition bg-slate-600 rounded-md text-nowrap right-1 text-white">
            {name}
          </p>
        </div>
      </div>
    </nav>
  );
}
