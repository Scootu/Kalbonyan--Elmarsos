import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <>
      <MainNavigation />
      <main>
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p><i>{error.statusText || error.message}</i></p>
        </div>
      </main>
    </>
  );
};

export default Error;
