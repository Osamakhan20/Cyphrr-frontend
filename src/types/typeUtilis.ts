import type { JSX, ReactNode } from "react";

export {};

declare global {
  interface NavItem {
    label: string;
    path: string;
  }

  interface Category {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  interface Job {
    company: string;
    role: string;
    time: string;
    description: string;
    icon: React.ReactNode;
  }

  interface ContactInfo {
    title: string;
    value: string;
    icon: JSX.Element;
  }

  type Services = {
    heading: string;
    description: string;
    icon: React.ReactNode;
  };

  type StatItemProps = {
    icon: ReactNode;
    label: string;
    value: string;
  };
  type Stat = StatItemProps;
  type JobFinderSectionProps = {
  imageFirst?: boolean;
};

}
