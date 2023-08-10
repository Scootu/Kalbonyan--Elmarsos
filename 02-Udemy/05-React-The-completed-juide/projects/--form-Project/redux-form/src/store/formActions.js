import { useFormUiAction } from "./useFormHookRedux";

export const sendFetchData = (form) => {
  return async (dispatch) => {
    dispatch(useFormUiAction.pending());
    const fetchData = async () => {
      const requeste = await fetch("https://google.com/api", {
        method: "PUT",
        body: JSON.stringify(form),
      });
      if (!requeste.ok) {
        throw new Error("somthing was rong");
      }
      const data = requeste.json();
    };
    try {
      await fetchData();
      dispatch(useFormUiAction.success());
    } catch (err) {
      dispatch(useFormUiAction.failed(err.message));
    }
  };
};
