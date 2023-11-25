import Image from "next/image";

export default function ProjectCard({ title, link, img }) {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[70%] transition-transform duration-[3s]"
          width={350}
          height={350}
          src={img}
          alt="Amazonclone"
        />
        <p className="absolute lg:hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
}
