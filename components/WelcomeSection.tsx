export default function WelcomeSection() {
  return (
    <section
      id="welcome-section"
      className="flex flex-col justify-start items-center w-full min-h-screen pt-[6.25rem]"
    >
      <div
        id="img-container"
        className="min-w-[12.5rem] min-h-[12.5rem] bg-[url('/media/SrikarProfilePic.jpeg')] bg-center bg-cover border-[0.625rem] border-nav-border rounded-full md:min-w-[9.375rem] md:min-h-[9.375rem] sm:min-w-[6.25rem] sm:min-h-[6.25rem]"
      />
      <div
        id="name-tag"
        className="text-whitesmoke text-[3.125rem] [text-shadow:2px_2px_15px_black] font-serif md:text-[1.875rem] sm:text-xl"
      >
        SRIKAR GUNNAM
      </div>
      <div
        id="profession-tag"
        className="text-accent-red [text-shadow:2px_2px_15px_black] text-[2.5rem] font-mono md:text-[1.563rem] sm:text-[0.938rem]"
      >
        Software Engineer
      </div>
      <i className="fas fa-laptop-code text-[11.25rem] text-nav-border md:text-[7.5rem] sm:text-[5rem]" />
    </section>
  );
}

