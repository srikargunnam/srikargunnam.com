import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageUrl: "https://shots.codepen.io/username/pen/porEReY-320.jpg",
    title: "Technical Documentation Page",
    link: "https://codepen.io/srikargunnam/full/porEReY",
  },
  {
    imageUrl: "https://shots.codepen.io/username/pen/abyZZKJ-320.jpg",
    title: "Product Landing Page",
    link: "https://codepen.io/srikargunnam/full/abyZZKJ",
  },
  {
    imageUrl: "https://shots.codepen.io/username/pen/XWRGBYX-320.jpg",
    title: "Survey Form",
    link: "https://codepen.io/srikargunnam/full/XWRGBYX",
  },
  {
    imageUrl: "https://shots.codepen.io/username/pen/eYWWvMz-320.jpg",
    title: "Tribute Page",
    link: "https://codepen.io/srikargunnam/full/eYWWvMz",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="h-fit bg-projects-bg pb-[3.125rem]"
    >
      <div className="text-[3.125rem] [text-shadow:2px_2px_15px_black] text-center pt-20 pb-2.5 text-whitesmoke border-b-2 border-white md:text-[1.563rem]">
        My Projects
      </div>
      <div className="flex justify-center flex-row flex-wrap overflow-y-hidden pt-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

