export default function Navbar() {
  return (
    <section id="header-section">
      <nav
        id="navbar"
        className="w-full h-[3.75rem] bg-nav-dark fixed flex justify-end z-50"
      >
        <ul
          id="navlist"
          className="pr-2.5 flex list-none items-center border-none"
        >
          <li className="hover:scale-125 transition-all duration-500">
            <a
              href="#welcome-section"
              className="text-whitesmoke text-xl font-sans p-2.5 mx-4 no-underline w-fit h-fit rounded-[0.625rem] font-semibold hover:text-nav-dark hover:bg-white transition-all duration-300 md:text-lg sm:text-xs"
            >
              HOME
            </a>
          </li>
          <li className="hover:scale-125 transition-all duration-500">
            <a
              href="#about"
              className="text-whitesmoke text-xl font-sans p-2.5 mx-4 no-underline w-fit h-fit rounded-[0.625rem] font-semibold hover:text-nav-dark hover:bg-white transition-all duration-300 md:text-lg sm:text-xs"
            >
              ABOUT
            </a>
          </li>
          <li className="hover:scale-125 transition-all duration-500">
            <a
              href="#projects"
              className="text-whitesmoke text-xl font-sans p-2.5 mx-4 no-underline w-fit h-fit rounded-[0.625rem] font-semibold hover:text-nav-dark hover:bg-white transition-all duration-300 md:text-lg sm:text-xs"
            >
              WORK
            </a>
          </li>
          <li className="hover:scale-125 transition-all duration-500">
            <a
              href="#contact"
              className="text-whitesmoke text-xl font-sans p-2.5 mx-4 no-underline w-fit h-fit rounded-[0.625rem] font-semibold hover:text-nav-dark hover:bg-white transition-all duration-300 md:text-lg sm:text-xs"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

