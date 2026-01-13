import { Email } from "../Layout/Email";
import HeroSection from "../Layout/Hero";
import JobFinderSection from "../Layout/JobFinder";
import LatestJobs from "../Layout/LatestJobs";
import { Navbar } from "../Layout/Navbar";
import PopularCategories from "../Layout/PopularCategory";
import { Services } from "../Layout/Services";
import { StatsSection } from "../Layout/StatsSection";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PopularCategories />
      <JobFinderSection imageFirst />
      <LatestJobs />
      <Services />
      <Email />
    </>
  );
};
