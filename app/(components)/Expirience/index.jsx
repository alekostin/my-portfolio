import Title from "../Title";
import { MdWork } from "react-icons/md";
import ExperienceCard from "../ExpirienceCard";

export default function Experience() {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} position="right" />
      <div className="flex flex-col md:flex-row justify-center gap-20">
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
