/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser, signOutUser } from "../../api/authApi";

export const signUpThunk = createAsyncThunk<
  {
    user: User;
    session: Session;
  },
  SignUpPayload,
  { rejectValue: string }
>("auth/signup", async (payload, { rejectWithValue }) => {
  try {
    return await signUpUser(payload);
  } catch (error) {
    return rejectWithValue("Sign Up failed");
  }
});

export const loginThunk = createAsyncThunk<
  { user: User; session: Session },
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const result = await signInUser(payload);
    return result;
  } catch (error) {
    return rejectWithValue("Login failed");
  }
});

export const logoutThunk = createAsyncThunk<{ rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOutUser();
    } catch (error) {
      return rejectWithValue("Logout failed");
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
}

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
        state.access_token = action.payload.session?.accessToken || null;
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
        state.access_token = action.payload.session?.accessToken || null;
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

export const { clearError,setUser } = authSlice.actions;
export default authSlice.reducer;
