import {
  FrameAccount,
  FrameProfile,
  FrameAlert,
  FrameListing,
} from "../Helper/Icons";

const steps = [
  {
    title: "Create an Account",
    description: "Sign up now to gain access to all resources with CYPHRR.",
    icon: <FrameAccount className="size-11 text-black" />,
  },
  {
    title: "Complete Your Profile",
    description: "Complete your profile fully to boost our job search results.",
    icon: <FrameProfile className="size-11 text-black" />,
  },
  {
    title: "Set Up Job Alerts",
    description: "Activate real-time job alerts and notifications with CYPHRR.",
    icon: <FrameAlert className="size-11 text-black" />,
  },
  {
    title: "Explore Job Listings",
    description:
      "Explore thousands of job areas that align with your preferences.",
    icon: <FrameListing className="size-11 text-black" />,
  },
];

export const FrameSection = () => {
  return (
    <section className="bg-primary px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-14">How it Works?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps &&
            steps.length > 0 &&
            steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="  rounded-xl p-4 mb-2">{step.icon}</div>

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
