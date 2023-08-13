import { Outlet } from "react-router-dom";
import EventsNavigation from "../Event/EventsNavigation";
function EventRoot() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
export default EventRoot;
