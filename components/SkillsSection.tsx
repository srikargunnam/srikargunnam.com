export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-grey-50 py-20 px-6 md:px-4 sm:px-3"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-12 border-b-2 border-black pb-3 md:text-3xl sm:text-2xl">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4 md:text-lg sm:text-base">
              Frontend
            </h3>
            <ul className="space-y-2 text-grey-800 md:text-sm">
              <li>React</li>
              <li>React Native</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Redux, Jotai, React Query</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4 md:text-lg sm:text-base">
              Backend
            </h3>
            <ul className="space-y-2 text-grey-800 md:text-sm">
              <li>Node.js</li>
              <li>NestJS</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4 md:text-lg sm:text-base">
              Databases
            </h3>
            <ul className="space-y-2 text-grey-800 md:text-sm">
              <li>MongoDB (including aggregation pipelines)</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
            </ul>
          </div>

          {/* Engineering */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4 md:text-lg sm:text-base">
              Engineering
            </h3>
            <ul className="space-y-2 text-grey-800 md:text-sm">
              <li>Monorepo architecture</li>
              <li>Performance profiling</li>
              <li>Debugging production issues</li>
              <li>Git, Sentry, Amplitude</li>
              <li>Android Studio, Xcode</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

