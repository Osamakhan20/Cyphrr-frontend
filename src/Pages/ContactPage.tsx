import { About } from "../Layout/About";
import { Email } from "../Layout/Email";
import ContactSection from "../Layout/Form";

export const ContactPage = () => {
  return (
    <>
      <About title="Contact Us" paragraph="Contact us" />
      <ContactSection/>
      <Email/>
    </>
  );
};
