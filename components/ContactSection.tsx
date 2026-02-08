export default function ContactSection() {
  return (
    <section id="contact" className="w-full h-screen bg-section-dark">
      <div className="flex justify-center items-center flex-col w-full h-[90vh]">
        <h1 className="text-[2.5rem] pt-20 text-whitesmoke [text-shadow:2px_2px_10px_black] text-center md:text-[1.563rem]">
          Get in touch...
        </h1>
        <div className="w-full h-[20vh] flex justify-center items-center">
          <a
            href="https://www.facebook.com/srikargunnam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-block text-[1.875rem] text-white [text-shadow:2px_2px_10px_black] p-2.5 cursor-pointer translate-y-0 transition-transform duration-500 hover:translate-y-[0.313rem] hover:transition-transform hover:duration-[400ms] hover:delay-[100ms] md:flex md:flex-col">
              <i className="fab fa-facebook-square" />
              <span className="text-xl hidden md:inline-block">Facebook</span>
            </div>
          </a>
          <a
            href="https://twitter.com/srikargunnam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-block text-[1.875rem] text-white [text-shadow:2px_2px_10px_black] p-2.5 cursor-pointer translate-y-0 transition-transform duration-500 hover:translate-y-[0.313rem] hover:transition-transform hover:duration-[400ms] hover:delay-[100ms] md:flex md:flex-col">
              <i className="fab fa-twitter-square" />
              <span className="text-xl hidden md:inline-block">Twitter</span>
            </div>
          </a>
          <a
            href="https://github.com/srikargunnam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-block text-[1.875rem] text-white [text-shadow:2px_2px_10px_black] p-2.5 cursor-pointer translate-y-0 transition-transform duration-500 hover:translate-y-[0.313rem] hover:transition-transform hover:duration-[400ms] hover:delay-[100ms] md:flex md:flex-col">
              <i className="fab fa-github-square" />
              <span className="text-xl hidden md:inline-block">Git-hub</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/srikargunnam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-block text-[1.875rem] text-white [text-shadow:2px_2px_10px_black] p-2.5 cursor-pointer translate-y-0 transition-transform duration-500 hover:translate-y-[0.313rem] hover:transition-transform hover:duration-[400ms] hover:delay-[100ms] md:flex md:flex-col">
              <i className="fab fa-linkedin" />
              <span className="text-xl hidden md:inline-block">LinkedIn</span>
            </div>
          </a>
          <a
            href="https://codepen.io/srikargunnam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-block text-[1.875rem] text-white [text-shadow:2px_2px_10px_black] p-2.5 cursor-pointer translate-y-0 transition-transform duration-500 hover:translate-y-[0.313rem] hover:transition-transform hover:duration-[400ms] hover:delay-[100ms] md:flex md:flex-col">
              <i className="fab fa-codepen" />
              <span className="text-xl hidden md:inline-block">
                C<span className="fab fa-codepen" />DEPEN
              </span>
            </div>
          </a>
        </div>
      </div>
      <hr className="h-[0.188rem] bg-hr-red text-hr-red border-none" />
      <div className="text-whitesmoke p-2.5 md:text-lg sm:text-[0.75rem]">
        <p>Copyrights &copy; 2021 SRIKAR GUNNAM</p>
      </div>
    </section>
  );
}

