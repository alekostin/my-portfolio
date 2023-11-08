export default function SkillsInput({ title, link }) {
  return (
    <a href={link} target="_blank">
      <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:scale-110 hover:border-blue-600 hover:bg-black rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
}
