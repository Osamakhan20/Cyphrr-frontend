import { supabase } from "../supabaseClient";

export const signUpUser = async (payload: SignUpPayload) => {
  const { email, password, firstName, lastName } = payload;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user,
    session: data.session,
  };
};

export const signInUser = async (payload: LoginPayload) => {
  const { email, password } = payload;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user,
    session: data.session,
  };
};

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new Error(error.message);
  }

  return data.session;
};

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data.user;
};
