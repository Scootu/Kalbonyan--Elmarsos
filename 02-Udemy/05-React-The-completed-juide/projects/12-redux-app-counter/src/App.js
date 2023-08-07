import { Fragment } from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Headers from "./components/Header";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthontication = useSelector((state) => state.auth.isAuthontication);
  return (
    <Fragment>
      <Headers isAuthontication={isAuthontication} />
      {!isAuthontication && <Auth />}
      {isAuthontication && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
