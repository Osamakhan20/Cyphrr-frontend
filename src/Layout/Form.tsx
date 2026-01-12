import { AddresIcon, SupportIcon, EmailIcon } from "../Helper/Icons";

const contactInfo = [
  {
    title: "Our Address",
    value: "Grand Cayman, Cayman Islands",
    icon: <AddresIcon className="size-10 text-primary" />,
  },
  {
    title: "Our Email",
    value: "info@cyphrr.com",
    icon: <EmailIcon className="size-10 text-primary" />,
  },
  {
    title: "Live Support",
    value: "www.cyphrrlivechat.com",
    icon: <SupportIcon className="size-10 text-primary" />,
  },
];

function handleSubmit(e: { preventDefault: () => void }) {
  e.preventDefault();
}
const ContactSection = () => {
  return (
    <section className="bg-secondary px-6 py-20 -mt-80">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary  font-semibold mb-2">Get in Touch</p>

        <h2 className="text-textGray text-3xl md:text-4xl font-bold mb-14 mx-30">
          Have any questions, feel free to message us!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 mx-20">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex flex-col items-center mx-12">
              <div className="bg-bgCard rounded-full p-5 mb-4">{item.icon}</div>

              <h4 className="text-primary font-semibold mb-1">{item.title}</h4>

              <p className="text-textGray text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mx-auto max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label>
              Name:
              <input
                type="text"
                className="bg-bgCard text-textGray px-4 py-3 rounded-lg
            outline-none"
              />
            </label>

            <input
              placeholder="Email *"
              className="bg-bgCard text-textGray px-4 py-3 rounded-lg outline-none"
            />
          </div>

          <input
            placeholder="Subject *"
            className="bg-bgCard text-textGray px-4 py-3 rounded-lg outline-none w-full"
          />

          <textarea
            placeholder="Your Message *"
            rows={6}
            className="bg-bgCard text-textGray px-4 py-3 rounded-lg outline-none w-full resize-none"
          />

          <button
            type="submit"
            className="bg-textGray text-black px-8 py-3 rounded-lg font-semibold cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
