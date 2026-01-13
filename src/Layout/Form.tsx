import type { JSX } from "react";
import { AddresIcon, SupportIcon, EmailIcon } from "../Helper/Icons";

type ContactInfo = {
  title: string;
  value: string;
  icon: JSX.Element;
};

const contactInfo: ContactInfo[] = [
  {
    title: "Our Address",
    value: "Grand Cayman, Cayman Islands",
    icon: <AddresIcon className="size-15 text-primary" />,
  },
  {
    title: "Our Email",
    value: "info@cyphrr.com",
    icon: <EmailIcon className="size-15 text-primary" />,
  },
  {
    title: "Live Support",
    value: "www.cyphrrlivechat.com",
    icon: <SupportIcon className="size-15 text-primary" />,
  },
];

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="bg-secondary px-6 py-12 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-0 text-center">
        <p className="text-primary font-semibold mb-2">Get in Touch</p>

        <h2 className="text-textGray text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
          Have any questions, feel free to <br className="hidden md:block" />
          message us!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-10">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="rounded-full p-4 sm:p-5">{item.icon}</div>

              <h4 className="text-primary font-semibold mb-2">{item.title}</h4>

              <p className="text-[#E3E9E7] text-sm text-center max-w-xs">{item.value}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 text-left px-2 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Name *</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-bgCard text-[#E3E9E7] px-4 py-3 rounded-lg outline-none mt-2"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-bgCard text-[#E3E9E7] px-4 py-3 rounded-lg outline-none mt-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-medium">Subject *</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-bgCard text-white px-4 py-3 rounded-lg outline-none mt-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-medium">Your Message *</label>
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full bg-bgCard text-[#E3E9E7] px-4 py-3 rounded-lg outline-none resize-none mt-2"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-textGray text-black px-8 sm:px-10 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
