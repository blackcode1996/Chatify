import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => {},
    resetNotifications: (state, { payload }) => {},
  },

  extraReducers: (builder) => {
    // Save user after signup
    builder.addMatcher(
      appApi.endpoints.signupUser.matchFulfilled,
      (state, { payload }) => {
        return payload; // Update state with the payload
      }
    );

    // Save user after login
    builder.addMatcher(
      appApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        return payload; // Update state with the payload
      }
    );

    // Logout: destroy user session
    builder.addMatcher(
      appApi.endpoints.logoutUser.matchFulfilled,
      () => null // Set state to null when logging out
    );
  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;

export default userSlice.reducer;
