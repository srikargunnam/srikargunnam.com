export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-grey-50 py-20 px-6 md:px-4 sm:px-3"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-12 border-b-2 border-black pb-3 md:text-3xl sm:text-2xl">
          Projects
        </h2>
        <div className="space-y-6 text-grey-800 max-w-reading md:text-sm">
          <div>
            <h3 className="text-xl font-semibold text-black mb-2 md:text-lg sm:text-base">
              CNC Laser Cutting Machine
            </h3>
            <p className="leading-relaxed">
              A side project involving hardware and software integration for precision fabric cutting. Built with Arduino-based motor control and collaborative development with my brother.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
