export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white py-20 px-6 md:px-4 sm:px-3"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-12 border-b-2 border-black pb-3 md:text-3xl sm:text-2xl">
          About
        </h2>
        <div className="space-y-6 text-grey-800 max-w-reading md:text-sm">
          <p className="leading-relaxed">
            I transitioned from a non-technical background to software engineering, and now work as a full-stack engineer with a focus on frontend systems. With over three years of professional experience, I build and maintain production applications used by tens of thousands of users.
          </p>
          <p className="leading-relaxed">
            My work centers on React and React Native applications, backend APIs with NestJS, and the full development lifecycle from design to deployment. I focus on mobile performance optimization, scalable architecture, and reliable end-to-end delivery in monorepo environments.
          </p>
          <p className="leading-relaxed">
            Beyond engineering, I run a small pet boarding business that involves operations, customer communication, and systems thinking—demonstrating ownership and product-mindedness outside of code.
          </p>
        </div>
      </div>
    </section>
  );
}
