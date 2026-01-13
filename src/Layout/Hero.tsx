import {
  BackgroundImg,
  FbGreen,
  HomeBackground,
  IgGreen,
  TwGreen,
} from "../Helper/Icons";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center pt-24 md:pt-32 px-6 py-8 md:py-12 md:px-12 lg:px-24 overflow-hidden">
      <HomeBackground className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-[#0f3d3e]/70" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 space-y-4 md:space-y-6">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textGray leading-tight">
            Unlock your dream career by exploring opportunities.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-primary max-w-lg">
            Welcome to CYPHRR, where your dream job is just a click away.
            Recognizing the difficulties of job hunting, we’ve developed a
            simpler solution.
          </p>

          <h4 className="text-base md:text-xl font-bold text-textGray pt-4 md:pt-6">
            Popular Services
          </h4>

          <p className="text-sm sm:text-base md:text-lg text-primary max-w-lg">
            Set yourself apart from the competition by creating a dynamic video
            resume or CV that highlights your skills, experience, and
            accomplishments.
          </p>

          <div className="flex items-center gap-4 pt-4 flex-wrap">
            <p className="text-sm font-bold text-primary">Follow Us :</p>

            <a className="p-2 rounded  hover:scale-110 transition">
              <IgGreen />
            </a>
            <a className="p-2 rounded  hover:scale-110 transition">
              <FbGreen />
            </a>
            <a className="p-2 rounded hover:scale-110 transition ">
              <TwGreen />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <BackgroundImg className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
