import { About } from "../Layout/About";
import { Email } from "../Layout/Email";
import ContactSection from "../Layout/Form";
import AppConstants from "../Helper/AppConstant";

export const ContactPage = () => {
  const { pages } = AppConstants;

  return (
    <>
      <About title={pages?.contact?.title} paragraph={pages?.contact?.paragraph} />
      <ContactSection />
      <Email />
    </>
  );
};
