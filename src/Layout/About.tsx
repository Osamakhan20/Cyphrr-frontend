import { AboutImg } from "../Helper/Icons";
import { Navbar } from "./Navbar";

type AboutProps = {
  title?: string;
  paragraph?: string;
};

export const About = ({
  title = "About Company",
  paragraph = "About",
}: AboutProps) => {
  return (
    <section className="relative min-h-screen about-hero">
      <AboutImg className="absolute inset-0 w-full h-2/3 object-cover opacity-90 bg-secondary" />

      <style>
        {`
          .about-hero nav { background-color: transparent !important; }
        `}
      </style>

      <div className="absolute inset-0  z-10">
        <Navbar  />

        <div className="max-w-7xl mx-auto flex flex-col items-center mt-30 px-4 py-24">
          <h1 className="text-5xl font-bold text-textGray">
            {title}
          </h1>

          <p className="text-lg text-textGray mt-2">
            <span className="text-primary">Home</span> | {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};
