import Banner from "./(components)/Banner";
import Aboutme from "./(components)/Aboutme";
import Experience from "./(components)/Expirience";
import Skills from "./(components)/Skills";
import Projects from "./(components)/Projects";
import Contacts from "./(components)/Contacts";
/* import Footer from "./(components)/Footer"; */

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto lg:pt-[0.8rem]">
        <Banner />
        <Projects />
        <Experience />
        <Aboutme />
        <Skills />
        <Contacts />
        {/* <Footer /> */}
      </div>
    </main>
  );
}

export const metadata = {
  title: "Oleksand Kostin | Portfolio",
};
