import { useLoaderData, json } from "react-router-dom";
import EventsList from "../Event/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events.events} />;
}
export async function loader() {
  // we can use any Browser API

  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Coulde not fetch data" }), {
    //   status: 500,
    // });
    throw json(
      { message: "Coulde not fetch data" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
export default EventsPage;
