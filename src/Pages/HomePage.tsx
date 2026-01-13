import { Email } from "../Layout/Email";
import HeroSection from "../Layout/Hero";
import JobFinderSection from "../Layout/JobFinder";
import LatestJobs from "../Layout/LatestJobs";
import PopularCategories from "../Layout/PopularCategory";
import { Services } from "../Layout/Services";
import { StatsSection } from "../Layout/StatsSection";

export const HomePage = () => {
  return (
    <>
      
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
