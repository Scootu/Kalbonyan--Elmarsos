// import { Fragment } from "react";
// import EventsList from "../Event/EventsList";

function EventsPage() {
  const [DUMMY_ARRAY, setDummyArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const sendRequest = useCallback(async () => {
    setLoading(true);
    const responce = await fetch("events.json");
    const data = await responce.json();
    setDummyArray(data.events);
    setLoading(false);
  }, []);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return (
    <Fragment>
      <h1 className="content">Events page</h1>
      {loading && <p>loading</p>}
      <EventsList events={DUMMY_ARRAY} />
    </Fragment>
  );
}

// export default EventsPage;
