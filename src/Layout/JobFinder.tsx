import { Job1, Job2 } from "../Helper/Icons";

const jobSeekers = [
  "Software Developer",
  "Registered Nurse",
  "Graphic Designer",
  "Marketing Specialist",
  "Financial Analyst",
  "Data Analyst",
];

type JobFinderSectionProps = {
  imageFirst?: boolean;
};

const JobFinderSection = ({ imageFirst = true }: JobFinderSectionProps) => {
  return (
    <section className="bg-secondary px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div
          className={`relative flex justify-center ${
            imageFirst ? "order-1" : "order-2"
          }`}
        >
          <Job1 className="rounded-2xl w-56 sm:w-72 md:w-80" />
          <Job2 className="absolute -bottom-6 -right-6 w-48 sm:w-56 md:w-64 rounded-2xl border-4 border-bgCard" />
          <div className="absolute -top-4 right-8 w-10 h-10 bg-primary rounded-xl" />
        </div>

        <div className={imageFirst ? "order-2" : "order-1"}>
          <p className="text-primary text-sm mb-2">About Our Job Finder</p>

          <h2 className="text-textGray text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Explore thousands of job listings from top companies
          </h2>

          <p className="text-primary text-sm mb-6">
            Discover thousands of job openings from leading companies. Our
            advanced search filters help you refine your choices by location,
            salary, job type, and more.
          </p>

          <h4 className="text-textGray font-semibold mb-3">
            Popular Job Seekers
          </h4>

          <p className="text-primary text-sm mb-4">
            Our advanced search filters allow you to narrow down your options
            and find roles that perfectly match your preferences.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {jobSeekers &&
              jobSeekers.length > 0 &&
              jobSeekers.map((item) => (
                <span
                  key={item}
                  className="bg-bgCard text-primary text-sm px-3 py-2 rounded-md hover:bg-primary hover:text-black transition"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobFinderSection;
