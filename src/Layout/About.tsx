import { AboutImg } from "../Helper/Icons";

type AboutProps = {
  title?: string;
  paragraph?: string;
};

export const About = ({
  title = "About Company",
  paragraph = "About",
}: AboutProps) => {
  return (
    <section className="relative min-h-screen">
      <AboutImg className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/60"  />


      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          {title}
        </h1>

        <p className="text-lg text-textGray">
          <span className="text-primary">Home</span> | {paragraph}
        </p>
      </div>
    </section>
  );
};
