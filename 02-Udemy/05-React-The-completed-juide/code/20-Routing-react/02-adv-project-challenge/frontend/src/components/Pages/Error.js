import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../Layout/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "Coulde not fetch data";
  let message = "Somthing was rong with fetch api";
  if (error.status === 500) {
    message = error.data.message;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
