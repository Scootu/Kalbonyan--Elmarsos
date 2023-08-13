import { createSlice } from "@reduxjs/toolkit";

const useFormUISlice = createSlice({
  name: "UI",
  initialState: { isNotification: { show: false, status: "", message: null } },
  reducers: {
    pending(state) {
      state.isNotification = {
        show: true,
        status: "pending",
        message: "whiting upload form data",
      };
    },
    success(state) {
      state.isNotification = {
        show: true,
        status: "success",
        message: "success upload the data",
      };
    },
    failed(state, action) {
      state.isNotification = {
        show: true,
        status: "error",
        message: action.payload,
      };
    },
  },
});

export default useFormUISlice;
