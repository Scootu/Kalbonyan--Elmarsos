import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const responce = await fetch(`http://localhost:8080/` + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application:json",
    },
    body: JSON.stringify(authData),
  });
  if (responce.status === 422 || responce.status === 401) {
    return responce;
  }
  if (!responce.ok) {
    throw json({ message: "Could not fetch the data", status: 500 });
  }

  return redirect("/");
}
