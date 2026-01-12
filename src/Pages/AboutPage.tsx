import { About } from "../Layout/About";
import JobFinderSection from "../Layout/JobFinder";

import { MeetingSection } from "../Layout/Meeting";
import { JobPoster } from "../Layout/Poster";

import { FrameSection } from "../Layout/Frame";

export const AboutPage = () => {
  return (
    <>
      <About />
      <MeetingSection />
      <JobPoster />
      <JobFinderSection imageFirst={false} />
      <FrameSection />
    </>
  );
};
