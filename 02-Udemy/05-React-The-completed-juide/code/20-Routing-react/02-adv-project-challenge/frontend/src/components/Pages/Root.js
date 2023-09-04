import { Outlet, useRouteLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../Layout/MainNavigation";
import { useEffect } from "react";
function RootLayout() {
  // const navigation = useNavigation();
  // console.log(navigation);
  // Dynamic submit
  const token = useRouteLoaderData("auth");
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/authentication", method: "post" });
    }
    setTimeout(() => {
      submit(null, { action: "/authentication", method: "post" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
