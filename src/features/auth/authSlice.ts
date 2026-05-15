import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser, signOutUser } from "../../api/authApi";
import type {
  User as SupabaseUser,
  Session as SupabaseSession,
} from "@supabase/supabase-js";

export const signUpThunk = createAsyncThunk<
  {
    user: SupabaseUser | null;
    session: SupabaseSession | null;
  },
  SignUpPayload,
  { rejectValue: string }
>("auth/signup", async (payload, { rejectWithValue }) => {
  try {
    const response = await signUpUser(payload);
    return response;
  } catch (error) {
    return rejectWithValue(error.message || "Sign Up failed");
  }
});

export const loginThunk = createAsyncThunk<
  {
    user: SupabaseUser | null;
    session: SupabaseSession | null;
  },
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await signInUser(payload);
    return response;
  } catch (error) {
    return rejectWithValue(error.message || "Login failed");
  }
});

export const logoutThunk = createAsyncThunk<void,void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOutUser();
    } catch (error) {
      return rejectWithValue(error.message || "Logout failed");
    }
  },
);

const initialState: AuthReducerState = {
  user: null,
  access_token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(signUpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.session?.access_token || null;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.session?.access_token || null;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return { ...initialState };
      })

      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, setUser } = authSlice.actions;
export default authSlice.reducer;
