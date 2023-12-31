import Image from "next/image";

export default function Banner() {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src="/profileImg.webp"
          alt="ProfileImg"
          width={200}
          height={200}
        />
      </div>
      {/* Description */}
      <div className="md:w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
          Aleksandr Kostin
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Hi there! I&apos;m a passionate full-stack web developer with a love
          for creating beautifully designed and functional websites. My goal is
          to bring your ideas to life and help you establish a strong online
          presence.
        </p>
      </div>
    </div>
  );
}
