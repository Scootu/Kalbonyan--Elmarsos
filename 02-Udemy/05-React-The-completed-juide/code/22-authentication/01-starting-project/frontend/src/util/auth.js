export function getToken() {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
}

export function tokenLoader() {
    return getToken();
}