import { createSlice } from "@reduxjs/toolkit";
const initailAuthState = { isAuthontication: false };
const authSlice = createSlice({
  name: "authontication",
  initialState: initailAuthState,
  reducers: {
    logIn(state) {
      state.isAuthontication = true;
    },
    logOut(state) {
      state.isAuthontication = false;
    },
  },
});
export const authAction = authSlice.actions;

export default authSlice.reducer;
