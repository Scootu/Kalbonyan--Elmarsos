import EventForm from "../Event/EventForm";
import { json } from "react-router-dom";
const NewEventPage = () => {
  return <EventForm />;
};
export default NewEventPage;

export async function action({ request }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const responce = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (responce.status === 422) {
    return responce;
  }
  if (!responce.ok) {
    return json(
      { message: "Coulde not fetch data" },
      {
        status: 500,
      }
    );
  }
}
