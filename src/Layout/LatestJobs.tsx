import {
  AppleIcon,
  BookmarkIcon,
  FbIcon,
  GoogleIcon,
  InstgramIcon,
  MicrosoftIcon,
  XIcon,
} from "../Helper/Icons";
import type {Job} from "../types/typeUtilis"


const jobs: Job[] = [
  {
    company: "Instagram",
    role: "Brand Partnerships Manager",
    time: "2 Days Ago",
    description:
      "Brand partnerships managers collaborate brands and advertisers to develop strategic",
    icon: <InstgramIcon className="size-10" />,
  },
  {
    company: "Twitter",
    role: "HR Business Partner",
    time: "2 Days Ago",
    description:
      "HR business partners work with Twitter’s leadership and employees to support organizational",
    icon: <XIcon className="size-10" />,
  },
  {
    company: "Facebook",
    role: "User Experience (UX) Designer",
    time: "2 Days Ago",
    description:
      "UX designers focus on creating intuitive and friendly experiences for Facebook’s products",
    icon: <FbIcon className="size-10" />,
  },
  {
    company: "Google",
    role: "Technical Support Specialist",
    time: "2 Days Ago",
    description:
      "Technical support specialists provide assistance to Google’s customers and users who encounter",
    icon: <GoogleIcon className="size-10" />,
  },
  {
    company: "Microsoft",
    role: "Cloud Solutions Architect",
    time: "2 Days Ago",
    description:
      "Cloud solutions architects design and imple cloud-based solutions using Microsoft Azure",
    icon: <MicrosoftIcon className="size-10" />,
  },
  {
    company: "Apple",
    role: "Customer Support Specialist",
    time: "2 Days Ago",
    description:
      "Customer support specialists assist customers with technical issues, product inquiries",
    icon: <AppleIcon className="size-10" />,
  },
];

const LatestJobs = () => {
  return (
    <section className="bg-secondary px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-textGray text-2xl md:text-3xl font-bold">
              Latest jobs here
            </h2>
            <p className="text-sm text-primary mt-1">889+ Job here</p>
          </div>

          <button className="text-primary text-sm underline md:self-auto cursor-pointer">
            View All Job
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {jobs &&
            jobs.length > 0 &&
            jobs.map((job) => (
              <div
                key={job.role}
                className="bg-bgCard rounded-xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition h-full min-h-40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    {job.icon}
                    <div>
                      <h3 className="text-textGray font-semibold">
                        {job.company}
                      </h3>
                      <p className="text-primary text-sm">{job.role}</p>
                      <p className="text-primary text-xs mt-1">{job.time}</p>
                    </div>
                  </div>
                  <BookmarkIcon className="size-5 text-primary cursor-pointer" />
                </div>
                <p className="text-primary text-sm leading-relaxed">
                  {job.description}
                </p>
                <button className="mt-auto w-fit bg-primary text-black text-sm px-4 py-2 rounded-md font-medium hover:bg-lime-300 transition cursor-pointer">
                  Apply Now
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
