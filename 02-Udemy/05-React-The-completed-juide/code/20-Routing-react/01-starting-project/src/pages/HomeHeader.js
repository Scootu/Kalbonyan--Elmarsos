import { Link, useNavigate } from "react-router-dom";
function HomeHeader() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/products');
  };
  return (
    <>
      <h1>HOME</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <button className="button" onClick={navigateHandler}>
        Navigate
      </button>
    </>
  );
}

export default HomeHeader;
