import { StatsGrid } from "./StatsticsItems";
import AppConstants from "../Helper/AppConstant";

export const StatsSection = () => {
  const { items } = AppConstants;

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
        items={items}
      />
    </section>
  );
};
export { StatsGrid };

