import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/usersApi";

const initialState = {
  users: [],
  singleUser: null,
  loading: false,
  error: null,
};
export const fetchAllUsers = createAsyncThunk("users/fetchAll", async () => {
  const response = await usersApi.apiGetAllUsers();
  return response.data;
});

export const fetchUserById = createAsyncThunk("users/fetchById", async (id: number) => {
  const response = await usersApi.apiGetByIdUsers(id);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export default userSlice.reducer;
