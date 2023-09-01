import { Form, NavLink } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <NavLink to={`${event.id}`} relative="path">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <Form method="post" action="/events">
        <button className="submit">Submit</button>
      </Form>
    </div>
  );
}

export default EventsList;
