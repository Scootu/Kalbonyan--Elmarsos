import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function addNewMeetup(data) {
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addNewMeetup} />;
}
