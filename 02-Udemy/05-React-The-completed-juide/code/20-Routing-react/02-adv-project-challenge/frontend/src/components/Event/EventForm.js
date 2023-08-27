import {
  useNavigate,
  useNavigation,
  Form,
  useActionData,
  json,
  redirect,
} from "react-router-dom";
import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
          required
        />
      </p>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={cancelHandler}
          disabled={!isSubmitting}
        ></button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const id = params.idEvent;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";
  console.log(url, request.method);
  if (request.method === "PATCH") {
    url = "http://localhost:8080/events/" + id;
  }
  const responce = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (responce.status === 422) {
    return responce;
  }
  if (!responce.ok) {
    throw json(
      { message: "Coulde not fetch data" },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
