import { useLoaderData, json, } from "react-router-dom";
import EventsList from "../Event/EventsList";
import { Fragment } from "react";

function EventsPage() {
  const events = useLoaderData();
  return (
    <Fragment>
      {/* <Form method="GET" action="/event">
        <input type="text" name="title" />
        <button type="submit">submit</button>
      </Form> */}
      <EventsList events={events.events} />;
    </Fragment>
  );
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
