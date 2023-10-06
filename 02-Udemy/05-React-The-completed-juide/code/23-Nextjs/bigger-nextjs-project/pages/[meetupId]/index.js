import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage() {
  return (
    <MeetupDetail
      image={"https://i.ibb.co/k4hjxdn/Zhifei-zhou-QEob0-Fp4rdg-unsplash.jpg"}
      title={"A First Meetup"}
      address={"Some Street 5, Some city"}
      description={"The meetup description"}
    />
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "e1",
        },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetup: {
        image: "https://i.ibb.co/k4hjxdn/Zhifei-zhou-QEob0-Fp4rdg-unsplash.jpg",
        id: "e1",
        titile: "A First Meetup",
        address: "Some Street 5, Some city",
        description: "The meetup description",
      },
    },
  };
}
