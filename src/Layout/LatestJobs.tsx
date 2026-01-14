import AppConstants from "../Helper/AppConstant";
import { BookmarkIcon } from "../Helper/Icons";

const LatestJobs = () => {
  const { jobs } = AppConstants;
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
