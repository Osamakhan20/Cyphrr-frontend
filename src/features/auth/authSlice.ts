import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser, signOutUser } from "../../api/authApi";

export const signUpThunk = createAsyncThunk<
  {
      user: User;
  session: Session;

  },
  SignUpPayload,
  { rejectValue: string }
>(
  "auth/signup",
  async ({ email, password, firstName, lastName }, { rejectWithValue }) => {
    try {
      return await signUpUser(email, password, firstName, lastName);
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Signup failed");
    }
  },
);

/**
 * Login thunk - handles user authentication
 */
export const loginThunk = createAsyncThunk<
  { user: User;
  session: Session; },
  LoginPayload,
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const result = await signInUser(email, password);
    return result;
  } catch (error: any) {
    return rejectWithValue(error.message || "Login failed");
  }
});

/**
 * Logout thunk - signs out the current user
 */
export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await signOutUser();
  } catch (error: any) {
    return rejectWithValue(error.message || "Logout failed");
  }
});

// Initial state for auth reducer
const initialState: AuthReducerState = {
  user: null,
  access_token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Auth slice definition
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Clear error action - useful for clearing error messages in UI
     */
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign up handling
      .addCase(signUpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.session?.access_token || null;
        state.isAuthenticated = !!action.payload.user;
        state.error = null;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // Login handling
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

      // Logout handling
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.access_token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
