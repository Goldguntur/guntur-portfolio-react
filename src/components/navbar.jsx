export default function Navbar({ name, logoImg, alt }) {
  return (
    <div className="navbar w-full flex justify-between fixed top-0  items-center antialiased">
      {/* logo nav */}
      <h1 className=" text-yellow-600 text-xl">
        {name}e<span className=" text-zinc-400">17</span>
      </h1>
      {/* list dropdown */}
      <ul className="flex gap-4 justify-center items-center ">
        <li>
          <a href="#home" target="_blank">
            Home
          </a>
        </li>
        <li>
          <a href="#about" target="_blank">
            About
          </a>
        </li>
        <li>
          <a href="#projects" target="_blank">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" target="_blank">
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
