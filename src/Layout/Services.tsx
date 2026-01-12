import {
  AccountImg,
  AlertImg,
  CarImg,
  HomeImg,
  ListingImg,
  ProfileImg,
} from "../Helper/Icons";

type Services = {
  heading: string;
  description: string;
  icon: React.ReactNode;
};

const ServicesData: Services[] = [
  {
    heading: "Create an Account",
    description: "Sign up now to gain access to all resources with CYPHRR.",
    icon: <AccountImg className="size-8" />,
  },
  {
    heading: "Complete Your Profile",
    description: "Complete your profile fully to boost our job search results.",
    icon: <ProfileImg className="size-8" />,
  },
  {
    heading: "Set Up Job Alerts",
    description: "Activate real-time job alerts and notifications with CYPHRR.",
    icon: <AlertImg className="size-8" />,
  },
  {
    heading: "Explore Job Listings",
    description:
      "Explore thousands of job areas that align with your preferences.",
    icon: <ListingImg className="size-8" />,
  },
];

export const Services = () => {
  return (
    <section className="bg-secondary px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <CarImg className="rounded-2xl w-72 md:w-80" />
          <HomeImg className="absolute -bottom-9 -right-4 w-56 md:w-62 rounded-2xl border-4 border-bgCard" />

          <div className="absolute -top-4 right-10 w-14 h-14 bg-primary rounded-xl" />
          <div className="absolute -bottom-16  w-14 h-14 bg-primary rounded-xl" />
        </div>

        <div>
          <p className="text-primary text-xl font-bold leading-snug mb-2 ">
            Service Our Job Finder
          </p>
          <h2 className="text-textGray text-2xl md:text-4xl font-bold mb-2">
            Access resources to boost your job search and professional
            development.
          </h2>
          <p className="text-primary text-sm leading-relaxed mb-6">
            Begin your path to professional success today with CYPHRR. Whether
            you're a recent graduate, an experienced professional, or someone
            seeking a career change, we're here to help.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-14">
            {ServicesData.map((Services) => (
              <div key={Services.heading} className="flex gap-4">
                <div className="w-20 h-12 flex items-center justify-center bg-primary rounded-lg">{Services.icon}</div>
                <div>
                  <h4 className="text-textGray font-semibold">{Services.heading}</h4>
                  <p className="text-primary text-sm mt-1 leading-relaxed">{Services.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
