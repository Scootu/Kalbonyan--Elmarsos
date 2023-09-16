import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getToken() {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return null; // for the loader function 
  }
  const duration = getTokenDuration();

  if (duration < 0) { // check the duration time 
    return 'EXPIRED';
  }
  return token;
}

export function tokenLoader() {
  return getToken();
}

export function checkAuthLoader() {
  const token = getToken();
  if (!token) {
    return redirect('/auth');
  }
}