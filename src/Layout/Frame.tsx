import AppConstants from "../Helper/AppConstant";

export const FrameSection = () => {
  const { steps } = AppConstants;
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
