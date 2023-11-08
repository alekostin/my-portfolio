import { FaProjectDiagram } from "react-icons/fa";
import Title from "../Title";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div className="wrapper">
      <Title text="My projects" icon={<FaProjectDiagram />} position="right" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img="/projects/sopranodental.png"
          title="Soprano Dental"
          link="https://sopranodental.com/"
        />
        <ProjectCard
          img="/projects/chi.png"
          title="Chi.Digital Hello"
          link="https://hello.chi.digital/"
        />
        <ProjectCard
          img="/projects/ideal-shop.webp"
          title="eCommerce web-shop"
          link="https://yellowgreen-panther-235776.hostingersite.com/"
        />
        <ProjectCard
          img="/projects/sborka-kyiv.webp"
          title="Suvenir constructor Sborka"
          link="https://sborka.kiev.ua/"
        />
        <ProjectCard
          img="/projects/10sguitars.png"
          title="10s Guitars"
          link="https://10sguitars.com/"
        />
        <ProjectCard
          img="/projects/icsaero.png"
          title="ICS Aero"
          link="https://ics-aero.com/en/"
        />
      </div>
    </div>
  );
}
