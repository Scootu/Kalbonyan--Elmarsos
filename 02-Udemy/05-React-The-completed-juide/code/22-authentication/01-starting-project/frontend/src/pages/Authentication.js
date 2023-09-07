import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const responce = await fetch("frontend/public/data.json", {
    method: "post",
    headers:{
      "Content-Type": "application:json",
    },
    body: authData,
  });
  if (responce.status === 422 || responce.status === 401) {
    return responce;
  }
  if (!responce.ok) {
    throw json({ message: "Could not fetch the data", status: 422 });
  }

  return redirect("/");
}
