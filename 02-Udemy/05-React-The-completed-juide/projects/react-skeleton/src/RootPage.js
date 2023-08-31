import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet } from "react-router-dom";

function RootPage() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="App">
        <Outlet />
      </div>
    </SkeletonTheme>
  );
}
export default RootPage;
