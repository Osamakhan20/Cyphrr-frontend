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

  interface UsersState {
    users: User[];
    singleUser: User | null;
    loading: boolean;
    currentUser: User | null;
    isLoggedIn: boolean;
    error: string | null | undefined;
  }
  
type AuthState = {
  currentUser: User | null;
  isLoggedIn: boolean;
  users: User[];
  loading: boolean;
  error: string | null;
  token: null
};
type loginPayload = {
  username: string;
  password: string;
}

interface SupabaseUser {
  id: string;
  email?: string;
  user_metadata?: {
    firstName?: string;
    lastName?: string;
  };
}

interface AuthSession {
  access_token: string;
  token_type?: string;
  expires_in?: number;
}

interface SupabaseAuthResponse {
  user: SupabaseUser | null;
  session: AuthSession | null;
}

interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}


type LoginPayload = {
  email: string;
  password: string;
};

type AuthReducerState = {
  user: SupabaseUser | null;
  access_token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null | unknown;
  };
  type Session = {
  accessToken: string;
}

}
