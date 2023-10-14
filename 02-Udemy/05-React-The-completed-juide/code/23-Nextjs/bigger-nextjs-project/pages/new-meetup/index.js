import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const router = useRouter();
  async function addNewMeetup(entredMeetupData) {
    const responce = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entredMeetupData),
    });
    const request = await responce.json();
    console.log("json : ", request);
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addNewMeetup} />;
}
