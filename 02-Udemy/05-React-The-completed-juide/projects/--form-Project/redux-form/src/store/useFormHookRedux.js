import { configureStore, createSlice } from "@reduxjs/toolkit";
import useFormUISlice from "./useFormUI";

const initialFormState = { validate: false };
const formValidationSlice = createSlice({
  name: "formValidationSlice",
  initialState: initialFormState,
  reducers: {},
});

const store = configureStore({
  reducer: { form: formValidationSlice.reducer, ui: useFormUISlice.reducer },
});
export const formValidationActions = formValidationSlice.actions;
export const useFormUiAction = useFormUISlice.actions;
export default store;
