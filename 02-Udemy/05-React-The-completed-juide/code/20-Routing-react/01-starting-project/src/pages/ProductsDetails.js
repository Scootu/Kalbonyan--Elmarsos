import { Link, useParams } from "react-router-dom";
const ProductsDetails = () => {
  const params = useParams();
  
  return (
    <>
      <h1>Products details</h1>
      <p>{params.idProduct}</p>
      <Link to="../" relative="path">Back</Link>
    </>
  );
};

export default ProductsDetails;
