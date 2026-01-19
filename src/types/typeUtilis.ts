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
  interface Name {
    firstname: string;
    lastname: string;
  }

  interface User {
    id?: number;
    email: string;
    username: string;
    password: string;
    name: Name;
  }
  interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
  }
  interface ButtonProps {
    text: string;
    disabled: boolean;
  }
 interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showPasswordToggle?: boolean;
}

  interface TextProps {
    children: React.ReactNode;
    className?: string;
  }
  interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenSignUp: () => void;
  }
  interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenLogin: () => void;
  }
}
