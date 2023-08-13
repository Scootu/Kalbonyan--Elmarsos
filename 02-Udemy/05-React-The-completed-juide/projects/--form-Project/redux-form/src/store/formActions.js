import { useFormUiAction } from "./useFormHookRedux";

export const sendFetchData = (form) => {
  return async (dispatch) => {
    dispatch(useFormUiAction.pending());
    const fetchData = async () => {
      const requeste = await fetch(
        "https://react-http-5605a-default-rtdb.firebaseio.com/FormReduxApp.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ DATA :form}),
        }
      );
      if (!requeste.ok) {
        throw new Error("somthing was rong");
      }
      const data = requeste.json();
      // another dispatch
      return data;
    };
    try {
      const requeste = await fetchData();
      dispatch(useFormUiAction.success());
    } catch (err) {
      dispatch(useFormUiAction.failed(err.message));
    }
  };
};
