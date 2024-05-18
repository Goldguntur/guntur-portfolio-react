export default function Navbar({ name, logoImg, alt }) {
  return (
    <div className="navbar w-full flex bg-black justify-between fixed top-0  items-center z-[9999999px]">
      <h1 className=" text-primary text-xl">
        {name}e<span className=" text-white">17</span>
      </h1>
      <ul className="flex gap-4 justify-center items-center ">
        <li>
          <a href="#home" target="_blank" className="text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#about" target="_blank" className="text-primary">
            About
          </a>
        </li>
        <li>
          <a href="#projects" target="_blank" className="text-primary">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" target="_blank" className="text-primary">
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
  );
}
