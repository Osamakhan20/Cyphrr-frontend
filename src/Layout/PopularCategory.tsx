import { Link } from "react-router-dom";
import {
  SoftwareImg,
  MarketingImg,
  NurseImg,
  FinancialImg,
  GraphicImg,
  OpeartionImg,
} from "../Helper/Icons";



const categories: Category[] = [
  {
    icon: <SoftwareImg className="size-6" />,
    title: "Software Engineer",
    description:
      "Software developers are responsible designing, developing, and maintaining software",
  },
  {
    icon: <MarketingImg className="size-6" />,
    title: "Marketing Specialist",
    description:
      "Marketing specialists develop and implement marketing strategies to promote products",
  },
  {
    icon: <NurseImg className="size-6" />,
    title: "Registered Nurse",
    description:
      "Registered nurses provide patient administer medications, and assist in medical",
  },
  {
    icon: <FinancialImg className="size-6" />,
    title: "Financial Analyst",
    description:
      "Financial analysts evaluate financial prepare reports, and provide insights to help",
  },
  {
    icon: <GraphicImg className="size-6" />,
    title: "Graphic Designer",
    description:
      "Graphic designers create visual concept and designs for various projects such",
  },
  {
    icon: <OpeartionImg className="size-6" />,
    title: "Operations Manager",
    description:
      "Operations managers are respon overseeing daily operations and processes within",
  },
];

const PopularCategories = () => {
  return (
    <section className="bg-secondary px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-textGray text-2xl md:text-3xl font-bold">
              Popular Categories
            </h2>
            <p className="text-primary text-sm mt-1">9999+ Jobs Category</p>
          </div>

          <button className="text-primary underline text-sm md:self-auto">
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories &&
            categories.length > 0 &&
            categories.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-bgCard rounded-xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition h-full min-h-40 sm:min-h-45"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary">
                  {icon}
                </div>

                <h3 className="text-textGray font-semibold text-base sm:text-lg">
                  {title}
                </h3>

                <p className="text-primary text-sm leading-relaxed">
                  {description}
                </p>

                <span className="mt-auto flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all cursor-pointer">
                  <Link to="/about">
                    Learn More <span>→</span>{" "}
                  </Link>
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
