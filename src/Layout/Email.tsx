export const Email = () => {
  return (
    <div className="bg-[#55643d] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h3 className="text-primary text-2xl font-bold mb-2">
            Subscribe here to receive new updates, notifications, and more.
          </h3>
          <p className="text-primary/80 text-sm">
            Join now to stay updated on all the latest developments, features,
            and upgrades of CYPHRR.
          </p>
        </div>

        <div className="flex w-full lg:w-auto bg-secondary rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 py-3 text-sm text-white outline-none w-full lg:w-64"
          />
          <button className="bg-primary text-black px-6 text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
