import { AddresIcon, SupportIcon, EmailIcon } from "./Icons";
import {
  SoftwareImg,
  MarketingImg,
  NurseImg,
  FinancialImg,
  GraphicImg,
  OpeartionImg,
} from "../Helper/Icons";

import {
  AppleIcon,
  FbIcon,
  GoogleIcon,
  InstgramIcon,
  MicrosoftIcon,
  XIcon,
} from "../Helper/Icons";

import { AccountImg, AlertImg, ListingImg, ProfileImg } from "../Helper/Icons";

import {
  FrameAccount,
  FrameProfile,
  FrameAlert,
  FrameListing,
} from "../Helper/Icons";

import { CompanyImg, EmployeeImg, SuitcaseImg } from "../Helper/Icons";

const AppConstants = {
  contactInfo: [
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
  ],
  categories: [
    {
      icon: <SoftwareImg className="size-6" />,
      title: "Software Engineer",
      description:
        "Software developers are responsible designing, developing, and maintaining software",
    },
    {
      icon: <MarketingImg className="size-6" />,
      title: "Marketing Specialist",
      description:
        "Marketing specialists develop and implement marketing strategies to promote products",
    },
    {
      icon: <NurseImg className="size-6" />,
      title: "Registered Nurse",
      description:
        "Registered nurses provide patient administer medications, and assist in medical",
    },
    {
      icon: <FinancialImg className="size-6" />,
      title: "Financial Analyst",
      description:
        "Financial analysts evaluate financial prepare reports, and provide insights to help",
    },
    {
      icon: <GraphicImg className="size-6" />,
      title: "Graphic Designer",
      description:
        "Graphic designers create visual concept and designs for various projects such",
    },
    {
      icon: <OpeartionImg className="size-6" />,
      title: "Operations Manager",
      description:
        "Operations managers are respon overseeing daily operations and processes within",
    },
  ],
  jobSeekers: [
    "Software Developer",
    "Registered Nurse",
    "Graphic Designer",
    "Marketing Specialist",
    "Financial Analyst",
    "Data Analyst",
  ],
  jobs: [
    {
      company: "Instagram",
      role: "Brand Partnerships Manager",
      time: "2 Days Ago",
      description:
        "Brand partnerships managers collaborate brands and advertisers to develop strategic",
      icon: <InstgramIcon className="size-10" />,
    },
    {
      company: "Twitter",
      role: "HR Business Partner",
      time: "2 Days Ago",
      description:
        "HR business partners work with Twitter’s leadership and employees to support organizational",
      icon: <XIcon className="size-10" />,
    },
    {
      company: "Facebook",
      role: "User Experience (UX) Designer",
      time: "2 Days Ago",
      description:
        "UX designers focus on creating intuitive and friendly experiences for Facebook’s products",
      icon: <FbIcon className="size-10" />,
    },
    {
      company: "Google",
      role: "Technical Support Specialist",
      time: "2 Days Ago",
      description:
        "Technical support specialists provide assistance to Google’s customers and users who encounter",
      icon: <GoogleIcon className="size-10" />,
    },
    {
      company: "Microsoft",
      role: "Cloud Solutions Architect",
      time: "2 Days Ago",
      description:
        "Cloud solutions architects design and imple cloud-based solutions using Microsoft Azure",
      icon: <MicrosoftIcon className="size-10" />,
    },
    {
      company: "Apple",
      role: "Customer Support Specialist",
      time: "2 Days Ago",
      description:
        "Customer support specialists assist customers with technical issues, product inquiries",
      icon: <AppleIcon className="size-10" />,
    },
  ],

  ServicesData: [
    {
      heading: "Create an Account",
      description: "Sign up now to gain access to all resources with CYPHRR.",
      icon: <AccountImg className="size-8" />,
    },
    {
      heading: "Complete Your Profile",
      description:
        "Complete your profile fully to boost our job search results.",
      icon: <ProfileImg className="size-8" />,
    },
    {
      heading: "Set Up Job Alerts",
      description:
        "Activate real-time job alerts and notifications with CYPHRR.",
      icon: <AlertImg className="size-8" />,
    },
    {
      heading: "Explore Job Listings",
      description:
        "Explore thousands of job areas that align with your preferences.",
      icon: <ListingImg className="size-8" />,
    },
  ],
  steps: [
    {
      title: "Create an Account",
      description: "Sign up now to gain access to all resources with CYPHRR.",
      icon: <FrameAccount className="size-11 text-black" />,
    },
    {
      title: "Complete Your Profile",
      description:
        "Complete your profile fully to boost our job search results.",
      icon: <FrameProfile className="size-11 text-black" />,
    },
    {
      title: "Set Up Job Alerts",
      description:
        "Activate real-time job alerts and notifications with CYPHRR.",
      icon: <FrameAlert className="size-11 text-black" />,
    },
    {
      title: "Explore Job Listings",
      description:
        "Explore thousands of job areas that align with your preferences.",
      icon: <FrameListing className="size-11 text-black" />,
    },
  ],
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  items: [
    { icon: <SuitcaseImg className="size-12" />, value: "500+", label: "Jobs" },
    {
      icon: <CompanyImg className="size-12" />,
      value: "250+",
      label: "Companies",
    },
    {
      icon: <EmployeeImg className="size-12" />,
      value: "1000+",
      label: "Employees",
    },
    {
      icon: <EmployeeImg className="size-12" />,
      value: "5000+",
      label: "Satisfied Clients",
    },
  ],
  pages: {
    contact: {
      title: "Contact Us",
      paragraph: "Contact us",
    },
  },
};

export default AppConstants;
