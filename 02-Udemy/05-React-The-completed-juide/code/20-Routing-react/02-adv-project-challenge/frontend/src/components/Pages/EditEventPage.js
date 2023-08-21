import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../Event/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData('event-edit');
  return <EventForm event={data.event}/>;
}

export default EditEventPage;
