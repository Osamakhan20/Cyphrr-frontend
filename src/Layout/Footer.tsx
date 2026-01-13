import { FbIcon, InstgramIcon, XIcon } from "../Helper/Icons";

const documentationLinks = [
  "Terms of use",
  "Privacy Policy",
  "Terms & Condition",
];

const companyLinks = ["About Us"];

const supportLinks = ["Technical Support"];

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="px-6 py-10 md:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <div>
            <h4 className="text-textGray font-semibold mb-3">Documentation</h4>
            <ul className="space-y-2 text-primary text-sm">
              {documentationLinks.map((item) => (
                <li key={item} className="cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-textGray font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-primary text-sm">
              {companyLinks.map((item) => (
                <li key={item} className="cursor-pointer hover:underline">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-textGray font-semibold mb-3">Contact Info</h4>
            <p className="text-primary text-sm">www.cyphrr.com</p>
            <p className="text-primary text-sm">info@cyphrr.com</p>
          </div>

          <div>
            <h4 className="text-textGray font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-primary text-sm">
              {supportLinks.map((item) => (
                <li key={item} className="cursor-pointer hover:underline">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-textGray font-semibold mb-3">Follow :</h4>
            <div className="flex gap-4">
              <InstgramIcon className="size-5 cursor-pointer text-primary" />
              <FbIcon className="size-5 cursor-pointer text-primary" />
              <XIcon className="size-5 cursor-pointer text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20 py-4 text-center text-primary text-xs">© Copyright 2024, All Rights Reserved by CYPHRR</div>
    </footer>
  );
};
