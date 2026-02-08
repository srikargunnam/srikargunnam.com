export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-white py-20 px-6 md:px-4 sm:px-3"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-12 border-b-2 border-black pb-3 md:text-3xl sm:text-2xl">
          Experience
        </h2>

        <div className="space-y-16">
          {/* Game Theory */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-black mb-1 md:text-xl sm:text-lg">
                Software Engineer II
              </h3>
              <p className="text-xl text-grey-700 mb-2 md:text-lg sm:text-base">
                Game Theory
              </p>
              <p className="text-grey-600 text-sm md:text-xs">
                October 2023 – Present
              </p>
            </div>
            <ul className="space-y-3 text-grey-800 max-w-reading md:text-sm">
              <li className="leading-relaxed">
                Scaled consumer mobile application to <strong>50,000+ downloads</strong> and grew monthly active users from <strong>2,000 to 20,000+</strong>
              </li>
              <li className="leading-relaxed">
                Improved Android performance from <strong>40–50 FPS to 100–120 FPS</strong> through systematic profiling and optimization
              </li>
              <li className="leading-relaxed">
                Built and maintained tablet-based face registration and check-in systems for production deployment
              </li>
              <li className="leading-relaxed">
                Delivered features end-to-end from design to production, working across <strong>React Native, Expo, Next.js, and NestJS</strong> in a monorepo architecture
              </li>
              <li className="leading-relaxed">
                Improved application stability, performance, and edge-case handling across mobile and web platforms
              </li>
            </ul>
          </div>

          {/* Matchday AI */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-black mb-1 md:text-xl sm:text-lg">
                Software Engineer
              </h3>
              <p className="text-xl text-grey-700 mb-2 md:text-lg sm:text-base">
                Matchday AI
              </p>
              <p className="text-grey-600 text-sm md:text-xs">
                September 2022 – September 2023
              </p>
            </div>
            <ul className="space-y-3 text-grey-800 max-w-reading md:text-sm">
              <li className="leading-relaxed">
                Built React and HTML Canvas tools for correcting AI-detected shuttle points in sports analytics
              </li>
              <li className="leading-relaxed">
                Developed React Native applications for coaches and players with focus on usability and performance
              </li>
              <li className="leading-relaxed">
                Contributed to Next.js internal web applications supporting core product functionality
              </li>
              <li className="leading-relaxed">
                Collaborated closely with ML teams on human-in-the-loop systems for data quality and model improvement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

