import Image from "next/image";
import Link from "next/link";

interface IProjectLinks {
  name: string;
  github: string;
  link?: string;
}

const ProjectLinks = ({ name, github, link }: IProjectLinks) => {
  return (
    <div className="flex flex-row align-bottom space-x-4">
      <Link href={github} target="_blank">
        <Image
          src="/github.svg"
          alt={`to ${name} github repository`}
          width={30}
          height={30}
          layout="fixed"
          className="hover:-translate-y-1 transition-transform cursor-pointer dark:invert"
        />
      </Link>
      {link ? (
        <Link href={link} target="_blank">
          <Image
            src="/arrow_right.svg"
            alt={`to ${name} github repository`}
            width={30}
            height={30}
            layout="fixed"
            className="hover:-translate-y-1 transition-transform cursor-pointer dark:invert"
          />
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectLinks;
