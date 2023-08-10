import { createSlice } from "@reduxjs/toolkit";

const useFormUISlice = createSlice({
  name: "UI",
  initialState: { isNotification: false, status: "", message: "" },
  reducers: {
    pending(state) {
      state.isNotification = true;
      state.status = "pending";
      state.message = "whiting upload form data";
    },
    success(state) {
      state.isNotification = true;
      state.status = "success";
      state.message = "success upload the data";
    },
    failed(state, action) {
      state.isNotification = true;
      state.status = "error";
      state.message = action.payload;
    },
  },
});

export default useFormUISlice;
