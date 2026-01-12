import { PlayIcon } from "../Helper/Icons";
import { StatsGrid } from "../Layout/StatsSection";
import {
  CompanyImg,
  EmployeeImg,
  SuitcaseImg,
  MeetingImg,
} from "../Helper/Icons";

export const MeetingSection = () => {
  return (
    <section className="bg-secondary px-6 py-16 -mt-80">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-primary text-sm font-semibold mb-2">About Us</p>

            <h2 className="text-textGray text-3xl md:text-4xl font-bold leading-tight mb-4">
              Delivering professional support both locally and Internationally
            </h2>

            <p className="text-primary text-sm">
              No matter your location, we are ready to assist.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-b border-primary/30 pb-3">
              <h4 className="text-textGray font-semibold mb-1">Who We Are?</h4>
              <p className="text-primary text-sm">
                We are a real-time resource platform company dedicated to
                providing users with instant access to everyday essentials
                online. Our goal is ensure everyone has a reliable and timely
                source for their daily needs.
              </p>
            </div>

            <div className="border-b border-primary/30 pb-3">
              <h4 className="text-textGray font-semibold">What’s our Goal?</h4>
            </div>

            <div className="border-b border-primary/30 pb-3">
              <h4 className="text-textGray font-semibold">Our Vision</h4>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <MeetingImg className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/30" />

          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
              <PlayIcon className="size-6 text-white ml-1" />
            </div>
          </button>
        </div>
        <StatsGrid
          items={[
            {
              icon: <SuitcaseImg className="size-12" />,
              value: "500+",
              label: "Jobs",
            },
            {
              icon: <CompanyImg className="size-12" />,
              value: "250+",
              label: "Companies",
            },
            {
              icon: <EmployeeImg className="size-12" />,
              value: "1000+",
              label: "Employees",
            },
            {
              icon: <EmployeeImg className="size-12" />,
              value: "5000+",
              label: "Satisfied Clients",
            },
          ]}
        />
      </div>
    </section>
  );
};
