import Image from "next/image";

export default function ExperienceCard({ title, subTitle, icon }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <Image src={icon} width={30} height={30} alt="logo" />
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
}
