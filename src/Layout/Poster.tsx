import {
  Person1,
  Person2,
  Person3,
  SearchIcon,
  CandidateIcon,
} from "../Helper/Icons";

export const JobPoster = () => {
  return (
    <section className="bg-bgCard px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">
        <div className="relative flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Person1 className="rounded-2xl w-28 h-28 sm:w-40 sm:h-40 object-cover" />
            <Person2 className="rounded-2xl w-28 h-28 sm:w-40 sm:h-40 object-cover" />
            <Person3 className="rounded-2xl w-36 h-36 sm:w-40 sm:h-40 object-cover col-span-2 mx-auto" />
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-10 bg-bgCard rounded-lg flex items-center px-3 py-2 shadow-md">
            <input
              type="text"
              placeholder="Designer, Brand, Logo"
              className="bg-transparent text-sm outline-none text-textGray"
            />
            <button className="ml-2 bg-primary p-2 rounded-md">
              <SearchIcon className="size-4 text-black" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 sm:left-10 bg-bgCard px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
            <CandidateIcon className="size-4 text-primary" />
            <p className="text-xs text-textGray font-medium">18k+ candidates</p>
          </div>
        </div>

        <div>
          <p className="text-primary text-sm font-semibold mb-3">About Us</p>

          <h2 className="text-textGray text-3xl md:text-4xl font-bold leading-tight mb-4">
            Get over <span className="text-primary">50,000+</span> job
            opportunities.
          </h2>

          <p className="text-primary text-sm mb-5 max-w-lg">
            Explore thousands of job opportunities tailored to your preferences,
            ensuring a continuous flow of work. Imagine never being out of a
            job! We cater to everyone — job seekers, employers, and independent
            contractors.
          </p>

          <ul className="text-primary text-sm space-y-2 mb-6">
            <li>• Real time job notifications</li>
            <li>• Huge job listing database</li>
            <li>• Easy online job application system</li>
          </ul>

          <button className="bg-primary text-black px-6 py-3 rounded-lg font-semibold">Post a Job</button>
        </div>
      </div>
    </section>
  );
};
