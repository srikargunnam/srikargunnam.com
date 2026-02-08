export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center w-full min-h-screen bg-white pt-24 pb-20 px-6 md:px-4 sm:px-3"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-semibold text-black mb-6 md:text-4xl sm:text-3xl">
          Full-Stack Software Engineer (Frontend-Heavy)
        </h1>
        <p className="text-xl text-grey-700 mb-4 max-w-reading mx-auto leading-relaxed md:text-lg sm:text-base">
          I build high-performance mobile and web applications using React, React Native, and NestJS — delivering production-grade systems used by tens of thousands of users.
        </p>
        <p className="text-lg text-grey-600 max-w-reading mx-auto md:text-base sm:text-sm">
          Currently Software Engineer II, focused on scalable frontend systems, mobile performance, and reliable end-to-end delivery.
        </p>
      </div>
    </section>
  );
}

