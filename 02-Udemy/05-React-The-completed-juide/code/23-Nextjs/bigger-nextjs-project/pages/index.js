import MeetupList from "../components/meetups/MeetupList";

const DUMMY_ARRAY = [
  {
    id: "e1",
    title: "standbild",
    image: "https://i.ibb.co/mH6cp7C/jess-aston-Dvop-K4g-Ns8-A-unsplash.jpg",
    address: "Bourached",
    description: "a first meetup for bourached",
  },
  {
    id: "e2",
    title: "Cityscape",
    image: "https://i.ibb.co/mH6cp7C/jess-aston-Dvop-K4g-Ns8-A-unsplash.jpg",
    address: "india city 10 h",
    description: "a first meetup for bourached",
  },
];
export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_ARRAY,
//     },
//   };
// }
export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_ARRAY },
    revalidate: 10,
  };
}
