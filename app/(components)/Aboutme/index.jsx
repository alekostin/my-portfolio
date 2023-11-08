import { SiInformatica } from "react-icons/si";
import Title from "../Title";

export default function Aboutme() {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Hello, I&apos;m Alex, a dedicated web developer on a journey through
          the ever-evolving world of web design and development. My passion for
          creating elegant, user-friendly websites has been a driving force in
          my career. My journey began as a front-end web developer, where I
          honed my skills in crafting pixel-perfect, responsive layouts. I then
          delved into the world of WordPress development, allowing me to build
          dynamic and content-rich websites for a variety of clients. As I
          continued to grow in my field, I discovered the exciting world of
          Next.js, a framework that aligns perfectly with my desire to push the
          boundaries of web development. With Next.js, I&apos;ve been able to
          create blazing-fast, server-rendered web applications that offer a
          superior user experience.
          {/* I believe that a great website is not just a digital
          presence but a powerful tool that can help individuals and businesses
          achieve their goals. I&apos;m dedicated to finding innovative
          solutions, staying up-to-date with the latest technologies, and
          ensuring that every project I take on is a unique and memorable
          digital experience. */}
        </p>
        <p>
          In addition to my love for coding, I&apos;ve spent two decades as a
          professional drummer, exploring different genres of music. Starting
          from 2016, I had the unique expirience to spend three years at sea,
          performing in different orchestras, show and rock bands aboard cruise
          liners, where we had woderful musical evenings with passangers from
          all corners of our globe.
        </p>

        <p>
          Thank you for considering me for your web development needs. I&apos;m
          excited to join forces with you and help bring your digital ideas to
          life. Let&apos;s embark on a journey to create something truly
          extraordinary.
        </p>
      </div>
    </div>
  );
}
