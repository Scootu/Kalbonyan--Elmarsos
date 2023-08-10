import { Link } from "react-router-dom";
function HomeHeader() {
  return (
    <>
      <h1>HOME</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}

export default HomeHeader;
