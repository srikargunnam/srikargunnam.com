interface ProjectCardProps {
  imageUrl: string;
  title: string;
  link: string;
}

export default function ProjectCard({ imageUrl, title, link }: ProjectCardProps) {
  return (
    <div className="w-max h-max flex justify-center items-center flex-col shadow-[2px_2px_10px_0px] rounded-[0.625rem] m-5 bg-project-box">
      <img
        src={imageUrl}
        alt={title}
        className="w-[15.938rem] p-[0.938rem] border-none rounded-[1.25rem] md:w-[13.375rem] md:h-[7.5rem]"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg p-[0.938rem] text-white no-underline md:p-[0.313rem] md:text-[0.938rem]"
      >
        {title}
      </a>
    </div>
  );
}

