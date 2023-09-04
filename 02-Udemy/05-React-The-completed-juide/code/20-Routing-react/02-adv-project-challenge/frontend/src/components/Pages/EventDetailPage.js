import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";

import EventItem from "../Event/EventItem";
import EventsList from "../Event/EventsList";
import { Suspense } from "react";

function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-edit");
  console.log("f", event, events);
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadEvent) => {
            return <EventItem event={loadEvent} />;
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadEvents) => {
            return <EventsList events={loadEvents} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const respData = await response.json();
    return respData.event;
  }
}
async function loadEvents() {
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
    const respData = await response.json();
    return respData.events;
  }
}
export async function loader({ request, params }) {
  const id = params.idEvent;

  return defer({
    event:await loadEvent(id),
    events: loadEvents(),
  });
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
