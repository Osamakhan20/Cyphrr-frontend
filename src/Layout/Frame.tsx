import { AccountImg, ProfileImg, AlertImg, ListingImg } from "../Helper/Icons";

const steps = [
  {
    title: "Create an Account",
    description: "Sign up now to gain access to all resources with CYPHRR.",
    icon: <AccountImg className="size-10 text-black" />,
  },
  {
    title: "Complete Your Profile",
    description: "Complete your profile fully to boost our job search results.",
    icon: <ProfileImg className="size-10 text-black" />,
  },
  {
    title: "Set Up Job Alerts",
    description: "Activate real-time job alerts and notifications with CYPHRR.",
    icon: <AlertImg className="size-10 text-black" />,
  },
  {
    title: "Explore Job Listings",
    description:
      "Explore thousands of job areas that align with your preferences.",
    icon: <ListingImg className="size-10 text-black" />,
  },
];

export const FrameSection = () => {
  return (
    <section className="bg-primary px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black mb-14">How it Works?</h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="bg-black text-primary rounded-xl p-4 mb-4">
                {step.icon}
              </div>

              <h4 className="font-semibold text-black mb-2">{step.title}</h4>

              <p className="text-sm text-black/70 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


