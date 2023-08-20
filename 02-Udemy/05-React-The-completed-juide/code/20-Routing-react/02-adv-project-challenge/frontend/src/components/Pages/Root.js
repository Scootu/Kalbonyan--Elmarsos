import { Outlet } from "react-router-dom";
import MainNavigation from "../Layout/MainNavigation";
function RootLayout() {
  // const navigation = useNavigation();
  // console.log(navigation);
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
