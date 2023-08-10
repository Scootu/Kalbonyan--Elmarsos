// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import SignupForm from "./utils/SigningUp.jsx";

function App() {
  const isNotification = useSelector((state) => state.ui.isNotification);
  return (
    <>
      {/* <Notification /> */}
      <SignupForm />
    </>
  );
}

export default App;
