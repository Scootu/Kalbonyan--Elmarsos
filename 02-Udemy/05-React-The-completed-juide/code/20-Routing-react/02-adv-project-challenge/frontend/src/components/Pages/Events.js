import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../Event/EventsList";
import { Suspense } from "react";

/* <Form method="GET" action="/event">
        <input type="text" name="title" />
        <button type="submit">submit</button>
   </Form>
 */

function EventsPage() {
  const { events } = useLoaderData();
  const loading = <p style={{ textAlign: "center" }}>Loading...</p>;
  // const data = useActionData();
  return (
    <>
      <Suspense fallback={loading}>
        <Await resolve={events}>
          {(loaderData) => {
            return <EventsList events={loaderData} />;
          }}
        </Await>
      </Suspense>
      {/* <Form method="post" action="/events">
        <button className="submit">Submit</button>
      </Form> */}
    </>
  );
}

// export async function action() {
//   return "hello";
// }
async function loaderEvent() {
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
    console.log(respData);
    return respData.events;
  }
}
export function loader() {
  return defer({
    events: loaderEvent(),
  });
}
export default EventsPage;
