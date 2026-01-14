import type { JSX } from "react";

export {};


declare global{

  export  interface NavItem  {
  label: string;
  path: string;
}

export interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
}


export interface Job  {
  company: string;
  role: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo  {
  title: string;
  value: string;
  icon: JSX.Element;
}

}