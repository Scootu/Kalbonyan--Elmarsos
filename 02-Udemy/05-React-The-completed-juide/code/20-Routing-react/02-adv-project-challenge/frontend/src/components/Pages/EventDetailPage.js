import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <div className="content">
        <h1>Detail event</h1>
        {params.idEvent}
      </div>
    </>
  );
};

export default EventDetailPage;
