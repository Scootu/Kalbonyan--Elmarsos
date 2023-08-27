import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../Event/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-edit");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.idEvent;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const id = params.idEvent;
  const responce = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!responce.ok) {
    throw json(
      { message: "Could not delete" },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}
