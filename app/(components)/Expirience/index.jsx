import Title from "../Title";
import { MdWork } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import ExperienceCard from "../ExpirienceCard";

export default function Experience() {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="chi.Digital"
          subTitle="Web Developer 2019 - 2022"
          icon="/chi.svg"
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Web Developer 2022 - present"
          icon="/freelancer.svg"
        />
      </div>
    </div>
  );
}
