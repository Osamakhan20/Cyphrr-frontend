import  {  AddresIcon, SupportIcon, EmailIcon } from "./Icons";



export const contactInfo: ContactInfo[] = [
  {
    title: "Our Address",
    value: "Grand Cayman, Cayman Islands",
    icon:  <AddresIcon className="size-15 text-primary" />,
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
