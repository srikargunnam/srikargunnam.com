export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-white border-b border-grey-200 fixed top-0 z-50 flex justify-end items-center px-6 md:px-4 sm:px-3">
      <ul className="flex list-none items-center gap-6 md:gap-4 sm:gap-2">
        <li>
          <a
            href="#hero"
            className="text-grey-700 hover:text-black text-sm font-medium no-underline transition-colors duration-200 md:text-xs"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-grey-700 hover:text-black text-sm font-medium no-underline transition-colors duration-200 md:text-xs"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-grey-700 hover:text-black text-sm font-medium no-underline transition-colors duration-200 md:text-xs"
          >
            EXPERIENCE
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-grey-700 hover:text-black text-sm font-medium no-underline transition-colors duration-200 md:text-xs"
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-grey-700 hover:text-black text-sm font-medium no-underline transition-colors duration-200 md:text-xs"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-grey-700 hover:text-black text-sm font-medium no-underline transition-colors duration-200 md:text-xs"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
