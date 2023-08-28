import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
function Authentication() {
  const fetcher = useFetcher();
  const { state, data } = fetcher;
  useEffect(() => {
    if (state === "idle" && data) {
      localStorage.setItem("token", JSON.stringify(data));
    }
  }, [state, data]);
  return (
    <>
      <fetcher.Form method="GET" action="/authentication">
        <label>Log In</label>
        <input name="token" type="text" />
        <button type="submit">Submit</button>
      </fetcher.Form>
    </>
  );
}

export default Authentication;

export async function loader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("token");
  return searchTerm;
}
