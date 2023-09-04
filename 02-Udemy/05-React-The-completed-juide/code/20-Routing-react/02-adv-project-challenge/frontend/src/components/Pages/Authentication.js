import { useEffect } from "react";
import { redirect, useFetcher } from "react-router-dom";
function Authentication() {
  const fetcher = useFetcher();

  return (
    <>
      <fetcher.Form method="post" action="/authentication">
        <label>Log In</label>
        <input name="token" type="text" />
        <button type="submit">Submit</button>
      </fetcher.Form>
    </>
  );
}

export default Authentication;

export async function action({ request }) {
  const data = await request.formData();
  const token = data.token;
  // let url = new URL(request.url);
  // let searchTerm = url.searchParams.get("token");
  localStorage.setItem("token", JSON.stringify(token));

  return redirect("/");
}
