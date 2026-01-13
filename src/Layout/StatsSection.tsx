import { StatsGrid } from "./StatsticsItems";
import { CompanyImg, EmployeeImg, SuitcaseImg } from "../Helper/Icons";




export const StatsSection = () => {
  return (
    <section className="bg-secondary px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-textGray text-2xl md:text-4xl font-bold">
          Connecting job seekers, employers, and independent contractors with their ideal matches for successful collaboration.
        </h1>
        <p className="text-primary text-center text-sm md:text-base mt-4 mx-auto max-w-3xl">
          Our platform matches professionals with opportunities that align their skills and aspirations with employers needs, fostering effective collaboration and driving mutual success and innovation.
        </p>
      </div>

      <StatsGrid
        items={[
          { icon: <SuitcaseImg className="size-12" />, value: "500+", label: "Jobs" },
          { icon: <CompanyImg className="size-12" />, value: "250+", label: "Companies" },
          { icon: <EmployeeImg className="size-12" />, value: "1000+", label: "Employees" },
          { icon: <EmployeeImg className="size-12" />, value: "5000+", label: "Satisfied Clients" },
        ]}
      />
    </section>
  );
};
export { StatsGrid };

