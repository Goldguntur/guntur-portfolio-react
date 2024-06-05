import { useState, useEffect } from "react";

export default function Navbar({ name }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <nav className="navbar fixed  top-0 block z-50  w-full ">
      <div className=" flex  relative bg-black  justify-between  lg:items-center  p-1 lg:p-3">
        <h1 className="top-0  text-primary text-xl ">
          {name}e<span className=" text-white ">17</span>
        </h1>
        <div
          className={`w-full ${
            isMenuVisible
              ? "-translate-y-0 md:transition-none"
              : "-translate-y-full md:-translate-y-0"
          }  transition md:transition-none linear w-full  uppercase md:flex justify-center md:static" id="list-default`}
        >
          <ul
            className={`flex ${
              isMenuVisible || isMdScreen
                ? "-translate-y-0"
                : "-translate-y-full md:-translate-y-0 hidden "
            } linear transition md:transition-none w-full  uppercase md:capitalize  gap-x-8 gap-y-12 rounded-md relative  md:static justify-center text-center h-[40vh] md:h-auto items-center md:mt-0  flex-col   md:flex-row ${
              isMenuVisible && "md:static"
            } md:text-sm lg:text-base`}
          >
            <li>
              <a
                href="#home"
                className="text-primary text-center absolute md:static "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-primary text-center absolute  md:static"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary text-center absolute md:static"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-primary text-center absolute md:static"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-2">
          <button className="bg-primary m-0 top-0 max-h-24 w-24 font-medium h-8 text-sm md:text-base text-nowrap rounded">
            hire me
          </button>
          <button
            className="top-0 max-h-24 m-0 h-8 rounded md:hidden"
            onClick={toggleMenu}
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
